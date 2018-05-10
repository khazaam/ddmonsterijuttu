import { Component } from '@angular/core';
import { NavController, ToastController, ModalController, LoadingController,NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

import { MonsteritProvider } from '../../providers/monsterit/monsterit';
import { InfoPage } from '../info/info';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  
})
export class HomePage {

nimi : string = "";
tyyppi : string = "";
koko : string = "";

sense : string = "";

monsterit : any;

armor_class: number;
hit_points: number;

speed: string = "";

strength: number;
dexterity: number;
constitution: number;
intelligence: number;
wisdom: number;
charisma: number;

constitution_save: number;
intelligence_save: number;
wisdom_save: number;

history: number;
perception: number;
arcana : number;
stealth : number;
intimidation : number;
athletics : number;

hit_dice : string = "";


  constructor(
    public navCtrl: NavController,

    public toastCtrl: ToastController,
    public modalCtrl: ModalController,
    public loadingCtrl: LoadingController,
    public monsterin: MonsteritProvider,
  
    public navParams: NavParams,  
  ) {

    console.log("PPPPPPPPPPPPPPPPPPPPPPPPPERKEEEEEEEEEEEEEEEEEEEEEEELEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE")



    this.nimi = this.navParams.get("name");
    this.tyyppi = this.navParams.get("type");
    this.koko = this.navParams.get("size");

    this.sense = this.navParams.get("senses");

    this.hit_dice = this.navParams.get("hit_dice");

    this.armor_class = this.navParams.get("armor_class");
    this.hit_points = this.navParams.get("hit_points");

    this.strength = this.navParams.get("strength");
    this.dexterity = this.navParams.get("dexterity");
    this.constitution = this.navParams.get("constitution");
    this.intelligence = this.navParams.get("intelligence");
    this.wisdom = this.navParams.get("wisdom");
    this.charisma = this.navParams.get("charisma");

    this.constitution_save = this.navParams.get("constitution_save");
    this.intelligence_save = this.navParams.get("intelligence_save");
    this.wisdom_save = this.navParams.get("wisdom_save");

    this.history = this.navParams.get("history");
    this.perception = this.navParams.get("perception");
    this.arcana = this.navParams.get("arcana");
    this.athletics = this.navParams.get("athletics");
    this.stealth = this.navParams.get("stealth");
    this.intimidation = this.navParams.get("intimidation");
  

    this.monsterin.haeKaikki().then((data) => {

      this.monsterit = data;
 
    });
  }

 //hirviöt kahdelle sivulle




}


