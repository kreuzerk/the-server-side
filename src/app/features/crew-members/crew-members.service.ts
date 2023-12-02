import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";

export interface CrewMember {
  id: number;
  name: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class CrewMembersService {

  private crewMembers: CrewMember[] = [
    {
      id: 1,
      name: 'Monkey D. Luffy',
      image: 'https://i3-img.prosiebenmaxx.de/pis/ezone/6e72qgELB38wdEB0AB1fHPDQCtTDCJ4UYl_Ic-IXCoYylZ0mXaheiyCf8r-rALiVAVI4STTmYcV1EDE726_Iuq2TDuTVRg38C0LJ7Fv94nVBQXYlc_YOhmZx0zwFTl4oWYURKQB7yBt8hmIDALHSnL6-2VsWnMy0aJ1GSWjFhcSdk6nevyQwcxNHMg/profile:mag-996x562'
    },
    {
      id: 2,
      name: 'Roronoa Zoro',
      image: 'https://dojotaku.com/cdn/shop/articles/roronoa-zoro-one-piece.webp?v=1686739204'
    },
    {
      id: 3,
      name: 'Nami',
      image: 'https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2023/08/01/one-piece-nami.jpeg'
    }
  ];

  public getCrewMembers(): Observable<CrewMember[]> {
    return of(this.crewMembers);
  }

  public getCrewMember(id: number): Observable<CrewMember | undefined> {
    return of(this.crewMembers.find(crewMember => crewMember.id === id));
  }

}
