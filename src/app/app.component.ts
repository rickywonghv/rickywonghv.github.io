import { Component,enableProdMode } from '@angular/core';
import {AppService } from'./app.service'
import {DomSanitizer , SafeResourceUrl} from "@angular/platform-browser";

enableProdMode();

@Component({
  selector: 'youtube-app',
  templateUrl:'./main.html',
  styleUrls: ['./styles.css']
})
export class AppComponent {
  title:String="Youtube";
  items:Object;
  key="";
  videoId;
  videoDesc;
  nextPage;
  perviousPage;
  pageInfo:number;
  keyWords;
  searchInput="";
  edmonpoonlive=false;
  playingItem=false;
  channelList=false;
  videoList=true;
  img:Object;

  constructor(public appservice:AppService,private sanitizer: DomSanitizer ){
    //this.search("wan hoi");
    this.appservice.edmondponLive().subscribe(res=>console.log(res.json()));
  }

  ngOnInit(){
    this.init();
  }

  public listVideo(){

  }

  private init(){
    this.img={left:"./left-arrow.png"};
    this.videoId=this.getCurrentVidId();
    this.videoDesc=this.getCurrentName();
    this.searchInput=this.getSearchKeyWords();
    if(this.videoId&&this.videoDesc,this.searchInput){
      this.playVid(this.videoId,this.videoDesc,0);
      this.search(this.searchInput);
    }else{
      this.search("wan hoi");
      this.playVid("QMQbAoTLJX8","Initial Video",0);
    }
  }

  private live(){
    this.edmonpoonlive=true;
    this.videoDesc='恐怖在線 Live';
  }

  public search(key:string){
    localStorage.setItem("keyWords",key);
    this.keyWords=key;
    this.searchInput=key;
    this.appservice.getSearch(key).subscribe(res=>this.listExe(res.json()));
  }
  public page(pageTk:string){
    this.keyWords=localStorage.getItem("keyWords");
    this.appservice.page(pageTk,this.keyWords).subscribe(res=>this.listExe(res.json()));
  }

  private listExe(result:any){
    console.log(result);
    this.items=result.items;
    if(result.nextPageToken){
      this.nextPage=result.nextPageToken;
    }
    if(result.prevPageToken){
      this.perviousPage=result.prevPageToken;
    }
    this.pageInfo=result.pageInfo.totalResults;
  }

  public playVid(Id,title,autoPlay){
    this.videoId=this.url(Id,autoPlay);
    this.saveVideoId(Id,title);
    this.videoDesc=title;
    this.playingItem=true;
  }
  private url(Id,autoPlay):SafeResourceUrl{
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${Id}?autoplay=${autoPlay}&controls=2&theme=dark&origin=youtube.damonwong.xyz&enablejsapi=1&playsinline=1&playerapiid=ytplayer`);
    //https://www.youtube.com/watch?v=
  }

  private saveVideoId(videoId:string,title:string){
    localStorage.setItem("current",videoId);
    localStorage.setItem("currentName",title);
  }
  private getCurrentVidId(){
    return localStorage.getItem("current");
  }
  private getCurrentName(){
    return localStorage.getItem("currentName");
  }
  private getSearchKeyWords(){
    return localStorage.getItem("keyWords");
  }
}
