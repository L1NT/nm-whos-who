import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

export interface Member {
  id:number,
  bio:string,
  birthday:string,
  country:string,
  city:string,
  state:string,
  hometown:string,
  joined:Date,
  link:string,
  membership_count?:number,
  name:string,
  photo:{
    base_url:string,
    highres_link:string,
    photo_id:number,
    photo_link:string,
    thumb_link:string,
    type:string
  },
  status:string,
  topics:string,
  visited:Date
}

@Injectable()
export class MeetupService {
  private readonly url:string = 'https://api.meetup.com/';
  public readonly oathUrl = 'https://secure.meetup.com/oauth2/';
  public readonly oauthKey = '505i52k35p57g85p8gvl905afa';
  // NOTE: Yout OAuth Consumers Redirect URI config is only `protocol://host:port/`
  // i.e. `https://home.lukejeter.com:3723/`
  public readonly redirectURI = 'https://home.lukejeter.com:3723/nm/';
  private readonly oauthSecret = 'h9eh4jgb00f4lo8rlv7knef9jq';

  private accessToken:string;
  private refreshToken:string;

  private mkeGroupIds:string[];

  public constructor(private http:Http) {
    let urlHash:string[] = document.location.hash.split('&');
    urlHash.forEach((property:string) => {
      // FIXME: there's no guarantee access_token will be the first property
      if (property.indexOf('#access_token=') === 0) {
        this.accessToken = property.substring(14);
      }
    })
  }

  public sortMembers(members:Member[]) {
    members.sort((a:Member, b:Member):number => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
  }

  public getMembers(query:string):Observable<Member[]> {
    return  this.getGroupIds().switchMap((groups:string[]) => {
      if (!groups)
        return Observable.of(undefined);

      let searchParams = this.buildSearchParams();
      searchParams.set('group_id', groups.join(","));
      // this will return the first 800 (of 1200+) members who joined MilwaukeeJS
      searchParams.set('order', 'joined');

      return this.http.get(this.url+'2/members?' + searchParams.toString()).map((response:Response) => {
        let members:Member[] = response.json().results;
        let needle = new RegExp(query, 'i');
        let filtered = members.filter((member:Member) => {
          return needle.test(member.name);
        });
        this.sortMembers(filtered);
        return filtered;
      }).catch((error:any):Observable<{}> => {
        console.log(error);
        this.accessToken = null;
        return Observable.of(undefined);
      });
    });
  }

  private buildSearchParams():URLSearchParams {
    let searchParams = new URLSearchParams();

    searchParams.set('photo-host', 'public');
    searchParams.set('access_token', this.accessToken);
    return searchParams;
  }

  private getGroupIds():Observable<string[]> {
    // this shouldn't change frequently enough that it needs to be checked more
    // than once per page load
    if (this.mkeGroupIds) {
      return Observable.of(this.mkeGroupIds);
    }

    let searchParams = this.buildSearchParams();
    searchParams.set('location', 'milwaukee');
    searchParams.set('category', '34');
    // appears to be a bug in the `http.es5.js:mergeOptions` function that improperly
    // merges RequestOptions objects; for now, append query params manually
    return this.http.get(this.url + 'find/groups?' + searchParams.toString())
      .map((categories:Response) => {
        this.mkeGroupIds = [];
        // filter the groups to just those with 'js' or 'javascript' in the name
        // because /members endpoint limits results to 800 and that was only returning
        // most of the "A"s - there are 4 js/javascript groups & a plethora of members
        let jsRegExp = new RegExp('milwaukeejs', 'i');
        categories.json().forEach((category:any) => {
          if (jsRegExp.test(category.name)) {
            this.mkeGroupIds.push(category.id.toString());
          }
        });
        return this.mkeGroupIds;
      }).catch((error:any):Observable<{}> => {
        this.accessToken = null;
        return Observable.of(undefined);
      });
  }

  private getRefreshedToken():Observable<{}> {
    let params = new URLSearchParams();
    params.set('client_id', this.oauthKey);
    params.set('client_secret', this.oauthSecret);
    params.set('grant_type', 'refresh_token');
    params.set('refresh_token', this.refreshToken);
    return this.http.post(this.oathUrl+'access', {body: params}).map((response:Response) => {
      let resp = response.json();
      this.accessToken = resp.access_token;
      this.refreshToken = resp.refresh_token;
      return undefined;
    });
  }
}
