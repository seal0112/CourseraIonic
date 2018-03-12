import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Comment } from '../../shared/comment'; 

/**
 * Generated class for the CommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html',
})
export class CommentPage {
	
  commention: FormGroup;
  comment: Comment;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  	private viewCtrl: ViewController,
  	private formBuilder: FormBuilder) { 

  	this.commention = this.formBuilder.group({
  		author: [""],
  		rating: 5,
  		comment: ["", Validators.required]
  	});

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentPage');
  }

  dismiss() {
  	this.viewCtrl.dismiss();
  }

  onSubmit() {
  	console.log(this.commention.value);
  	this.commention.value.date = new Date().toISOString();
  	this.viewCtrl.dismiss(this.commention.value);
  }

}
