import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

export const loadSvgResources=(ir:MatIconRegistry, ds:DomSanitizer)=>{
    const imgDir='assets/img';

    const avatarDir=`${imgDir}/avatar`;
    const iconDir=`${imgDir}/icons`;
    //集合
    ir.addSvgIcon('unassigned',ds.bypassSecurityTrustResourceUrl(`${avatarDir}/unassigned.svg`));
    ir.addSvgIconSetInNamespace('avatars',ds.bypassSecurityTrustResourceUrl(`${avatarDir}/avatars.svg`));

    ir.addSvgIcon('menu',ds.bypassSecurityTrustResourceUrl(`${iconDir}/menu.svg`));
    ir.addSvgIcon('trash',ds.bypassSecurityTrustResourceUrl(`${iconDir}/trash.svg`));
    ir.addSvgIcon('ellipsis',ds.bypassSecurityTrustResourceUrl(`${iconDir}/ellipsis.svg`));
    ir.addSvgIcon('genius',ds.bypassSecurityTrustResourceUrl(`${iconDir}/genius.svg`));
}