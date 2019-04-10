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
    ir.addSvgIcon('ellipsis',ds.bypassSecurityTrustResourceUrl(`${iconDir}/ellipsis.svg`));
    ir.addSvgIcon('genius',ds.bypassSecurityTrustResourceUrl(`${iconDir}/genius.svg`));
    ir.addSvgIcon('more',ds.bypassSecurityTrustResourceUrl(`${iconDir}/more.svg`));

    
    ir.addSvgIcon('trash',ds.bypassSecurityTrustResourceUrl(`${iconDir}/trash.svg`));
    ir.addSvgIcon('like',ds.bypassSecurityTrustResourceUrl(`${iconDir}/like.svg`));
    ir.addSvgIcon('heart',ds.bypassSecurityTrustResourceUrl(`${iconDir}/heart.svg`));
    ir.addSvgIcon('eye',ds.bypassSecurityTrustResourceUrl(`${iconDir}/eye.svg`));
    ir.addSvgIcon('edit',ds.bypassSecurityTrustResourceUrl(`${iconDir}/edit.svg`));
    ir.addSvgIcon('document',ds.bypassSecurityTrustResourceUrl(`${iconDir}/document.svg`));
    ir.addSvgIcon('badge',ds.bypassSecurityTrustResourceUrl(`${iconDir}/badge.svg`));

    ir.addSvgIcon('angle-left',ds.bypassSecurityTrustResourceUrl(`${iconDir}/angle-left.svg`));
    ir.addSvgIcon('angle-right',ds.bypassSecurityTrustResourceUrl(`${iconDir}/angle-right.svg`));

}