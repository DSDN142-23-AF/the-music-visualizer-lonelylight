
// vocal, drum, bass, and other are volumes ranging from 0 to 100
/** This function loads resources that will be used later. */
let backgrounds, bass_hand, drum_hand, drum_s, trumpet_hand,test; //define pictures
let first_time = true;

function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);

  if(first_time){
    backgrounds = loadImage('backgrounds.png');//load every pictures and hands
    bass_hand = loadImage('bass_hand.png');
    drum_hand = loadImage('drum_hand.png');
    drum_s = loadImage('drum.png');
    trumpet_hand = loadImage('trumpet_hand.png');
    //test = loadImage('test.png');
    first_time =false;
  }
  if(!backgrounds || !bass_hand || !drum_hand || !drum || !trumpet_hand){
    // waiting pictures load finished
    return;
  }

  image(backgrounds,0,0);//background

  //draw drum
  push();
  translate(100,360);
  rotate(radians(5000+map(drum,0,100,0,-5000)));
  image(drum_hand,0,-100);//drum left hand
  pop();

  push();
  translate(160,360);
  rotate(radians(map(drum,0,100,0,5000)));
  image(drum_hand,0,-100);//drum right hand
  pop();

  //draw bass
  push();
  translate(480,320);
  rotate(radians(800+map(drum,0,100,0,-1000)));
  image(bass_hand,0,0);//bass hand
  pop();

  //draw trumpet
  push();
  imageMode(CORNERS);
  image(trumpet_hand,320-map(vocal,0,100,0,120),215,320+78,215+52);//trumpet hand
  image(drum_s,0,0);//drum cover
  pop();

   // display "words"
   textAlign(CENTER);
   textSize(vocal);
   text(words, width/2, height/3);
  //self notes: as calcualte nearly 28.57ms per line 
   
}
