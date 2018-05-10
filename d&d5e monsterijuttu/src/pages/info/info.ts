import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HttpClient } from '@angular/common/http';

import { HomePage } from '../home/home';

import { MonsteritProvider } from '../../providers/monsterit/monsterit';

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

  indeksi : number;

  monsterit : any;

  

  constructor(
    
    public navCtrl: NavController, 
    public navParams: NavParams,
    public http : HttpClient,
    public monsterin : MonsteritProvider, ) {

this.monsterin.haeKaikki().then((data) => {

  this.monsterit = data;

  

  
 

});


    }

    
  

    naytaTiedot = (hirviojuttu) : void => {

      console.log("PPPPPPPPPPPPPPPPPPPPPPPPPERKEEEEEEEEEEEEEEEEEEEEEEELEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE")
  
  
      let hirviotiedot = {
       
    
                      //perustiedot hirvioon alkaa tasta
                        name : hirviojuttu.name,
                        size : hirviojuttu.size,
                        type : hirviojuttu.type,
                        hit_points: hirviojuttu.hit_points,
                        alignment: hirviojuttu.alignment,
                          armor_class: hirviojuttu.armor_class,
                          hit_dice: hirviojuttu.hit_dice,
                          speed: hirviojuttu.speed,
                      //statit alkaa tästä
                      strength: hirviojuttu.strength,
                      dexterity: hirviojuttu.dexterity,
                      charisma:  hirviojuttu.charisma,
                      intelligence: hirviojuttu.intelligence,
                      constitution: hirviojuttu.constitution,
                      wisdom:   hirviojuttu.wisdom,
                      //muut skillit    
                      senses:   hirviojuttu.senses,
                      //Saving Throw
                          constitution_save: hirviojuttu.constitution_save,
                          intelligence_save: hirviojuttu.intelligence_save,
                          wisdom_save: hirviojuttu.wisdom_save,
                      //Muita kykyjä
                          history: hirviojuttu.history,
                          perception: hirviojuttu.perception,
                          arcana : hirviojuttu.arcana,
                          stealth : hirviojuttu.stealth,
                          intimidation : hirviojuttu.intimidation,
                          athletics : hirviojuttu.athletics,
  
                      
    
    
    
                          }
                         
                          this.navCtrl.push(HomePage, hirviotiedot)
                          
    }


}
