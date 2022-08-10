import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Anime, Images } from '../anime-item/model/anime';


@Component({
  selector: 'app-modal-images',
  templateUrl: './modal-images.component.html',
  styleUrls: ['./modal-images.component.css']
})
export class ModalImagesComponent implements OnInit, OnChanges {

  anime: Array<Images> | null = null

  constructor(public modalRef: MdbModalRef<ModalImagesComponent>) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
      
  }
}
