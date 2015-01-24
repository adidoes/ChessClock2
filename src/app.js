/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var Vector2 = require('vector2');

var main = new UI.Window({});


//draw the board
  var bgRect = new UI.Rect({
    position: new Vector2(0,0),
    size: new Vector2(144, 168),
    backgroundColor: 'white'
  })
  main.add(bgRect);

var borderBot = new UI.Rect({
  position: new Vector2(0, 144),
  size: new Vector2(144, 24),
  backgroundColor: 'black'
})
main.add(borderBot);

var a1 = new UI.Rect({
  position: new Vector2(0, 126),
  size: new Vector2(18, 18),
  backgroundColor: 'black'
})
main.add(a1);

var a3 = new UI.Rect({
  position: new Vector2(0, 90),
  size: new Vector2(18, 18),
  backgroundColor: 'black'
})
main.add(a3);

var a5 = new UI.Rect({
  position: new Vector2(0, 54),
  size: new Vector2(18, 18),
  backgroundColor: 'black'
})
main.add(a5);
var a7 = new UI.Rect({
  position: new Vector2(0, 18),
  size: new Vector2(18, 18),
  backgroundColor: 'black'
})
main.add(a7);

var c1 = new UI.Rect({
  position: new Vector2(36, 126),
  size: new Vector2(18, 18),
  backgroundColor: 'black'
})
main.add(c1);

var c3 = new UI.Rect({
  position: new Vector2(36, 90),
  size: new Vector2(18, 18),
  backgroundColor: 'black'
})
main.add(c3);

var c5 = new UI.Rect({
  position: new Vector2(36, 54),
  size: new Vector2(18, 18),
  backgroundColor: 'black'
})
main.add(c5);
var c7 = new UI.Rect({
  position: new Vector2(36, 18),
  size: new Vector2(18, 18),
  backgroundColor: 'black'
})
main.add(c7);

var e1 = new UI.Rect({
  position: new Vector2(72, 126),
  size: new Vector2(18, 18),
  backgroundColor: 'black'
})
main.add(e1);

var e3 = new UI.Rect({
  position: new Vector2(72, 90),
  size: new Vector2(18, 18),
  backgroundColor: 'black'
})
main.add(e3);

var e5 = new UI.Rect({
  position: new Vector2(72, 54),
  size: new Vector2(18, 18),
  backgroundColor: 'black'
})
main.add(e5);
var e7 = new UI.Rect({
  position: new Vector2(72, 18),
  size: new Vector2(18, 18),
  backgroundColor: 'black'
})
main.add(e7);

var g1 = new UI.Rect({
  position: new Vector2(108, 126),
  size: new Vector2(18, 18),
  backgroundColor: 'black'
})
main.add(g1);

var g3 = new UI.Rect({
  position: new Vector2(108, 90),
  size: new Vector2(18, 18),
  backgroundColor: 'black'
})
main.add(g3);

var g5 = new UI.Rect({
  position: new Vector2(108, 54),
  size: new Vector2(18, 18),
  backgroundColor: 'black'
})
main.add(g5);
var g7 = new UI.Rect({
  position: new Vector2(108, 18),
  size: new Vector2(18, 18),
  backgroundColor: 'black'
})
main.add(g7);

var b2 = new UI.Rect({
  position: new Vector2(18, 108),
  size: new Vector2(18, 18),
  backgroundColor: 'black'
})
main.add(b2);

var b4 = new UI.Rect({
  position: new Vector2(18, 72),
  size: new Vector2(18, 18),
  backgroundColor: 'black'
})
main.add(b4);

var b6 = new UI.Rect({
  position: new Vector2(18, 36),
  size: new Vector2(18, 18),
  backgroundColor: 'black'
})
main.add(b6);
var b8 = new UI.Rect({
  position: new Vector2(18, 0),
  size: new Vector2(18, 18),
  backgroundColor: 'black'
})
main.add(b8);

var d2 = new UI.Rect({
  position: new Vector2(54, 108),
  size: new Vector2(18, 18),
  backgroundColor: 'black'
})
main.add(d2);

var d4 = new UI.Rect({
  position: new Vector2(54, 72),
  size: new Vector2(18, 18),
  backgroundColor: 'black'
})
main.add(d4);

var d6 = new UI.Rect({
  position: new Vector2(54, 36),
  size: new Vector2(18, 18),
  backgroundColor: 'black'
})
main.add(d6);
var d8 = new UI.Rect({
  position: new Vector2(54, 0),
  size: new Vector2(18, 18),
  backgroundColor: 'black'
})
main.add(d8);

var f2 = new UI.Rect({
  position: new Vector2(90, 108),
  size: new Vector2(18, 18),
  backgroundColor: 'black'
})
main.add(f2);

var f4 = new UI.Rect({
  position: new Vector2(90, 72),
  size: new Vector2(18, 18),
  backgroundColor: 'black'
})
main.add(f4);

var f6 = new UI.Rect({
  position: new Vector2(90, 36),
  size: new Vector2(18, 18),
  backgroundColor: 'black'
})
main.add(f6);
var f8 = new UI.Rect({
  position: new Vector2(90, 0),
  size: new Vector2(18, 18),
  backgroundColor: 'black'
})
main.add(f8);

var h2 = new UI.Rect({
  position: new Vector2(126, 108),
  size: new Vector2(18, 18),
  backgroundColor: 'black'
})
main.add(h2);

var h4 = new UI.Rect({
  position: new Vector2(126, 72),
  size: new Vector2(18, 18),
  backgroundColor: 'black'
})
main.add(h4);

var h6 = new UI.Rect({
  position: new Vector2(126, 36),
  size: new Vector2(18, 18),
  backgroundColor: 'black'
})
main.add(h6);
var h8 = new UI.Rect({
  position: new Vector2(126, 0),
  size: new Vector2(18, 18),
  backgroundColor: 'black'
})
main.add(h8);

/* draw pieces */
// draw black rooks
var rookB1 = new UI.Image({
  position: new Vector2(0, 0),
  size: new Vector2(18,18),
  image: 'images/rookB.png'
});
main.add(rookB1);
var rookB2 = new UI.Image({
  position: new Vector2(126, 0),
  size: new Vector2(18,18),
  image: 'images/rookB.png'
});
main.add(rookB2);

// draw black knights
var knightB1 = new UI.Image({
  position: new Vector2(18, 0),
  size: new Vector2(18,18),
  image: 'images/knightB.png'
});
main.add(knightB1);
var knightB2 = new UI.Image({
  position: new Vector2(108, 0),
  size: new Vector2(18,18),
  image: 'images/knightB.png'
});
main.add(knightB2);

// draw black bishops
var bishopB1 = new UI.Image({
  position: new Vector2(36, 0),
  size: new Vector2(18,18),
  image: 'images/bishopB.png'
});
main.add(bishopB1);
var bishopB2 = new UI.Image({
  position: new Vector2(90, 0),
  size: new Vector2(18,18),
  image: 'images/bishopB.png'
});
main.add(bishopB2);

// draw black king and queen
var kingB = new UI.Image({
  position: new Vector2(72, 0),
  size: new Vector2(18,18),
  image: 'images/kingB.png'
});
main.add(kingB);
var queenB = new UI.Image({
  position: new Vector2(54, 0),
  size: new Vector2(18,18),
  image: 'images/queenB.png'
});
main.add(queenB);

// draw white king and queen
var kingW = new UI.Image({
  position: new Vector2(72, 126),
  size: new Vector2(18,18),
  image: 'images/kingW.png'
});
main.add(kingW);
var queenW = new UI.Image({
  position: new Vector2(54, 126),
  size: new Vector2(18,18),
  image: 'images/queenW.png'
});
main.add(queenW);

// draw white rooks
var rookW1 = new UI.Image({
  position: new Vector2(0, 126),
  size: new Vector2(18,18),
  image: 'images/rookW.png'
});
main.add(rookW1);
var rookW2 = new UI.Image({
  position: new Vector2(126, 126),
  size: new Vector2(18,18),
  image: 'images/rookW.png'
});
main.add(rookW2);

// draw white knights
var knightW1 = new UI.Image({
  position: new Vector2(18, 126),
  size: new Vector2(18,18),
  image: 'images/knightW.png'
});
main.add(knightW1);
var knightW2 = new UI.Image({
  position: new Vector2(108, 126),
  size: new Vector2(18,18),
  image: 'images/knightW.png'
});
main.add(knightW2);

// // draw white bishops
var bishopW1 = new UI.Image({
  position: new Vector2(36, 126),
  size: new Vector2(18,18),
  image: 'images/bishopW.png'
});
main.add(bishopW1);
var bishopW2 = new UI.Image({
  position: new Vector2(90, 126),
  size: new Vector2(18,18),
  image: 'images/bishopW.png'
});
main.add(bishopW2);

//draw black pawns
var pawnB1 = new UI.Image({
  position: new Vector2(0, 18),
  size: new Vector2(18,18),
  image: 'images/pawnB.png'
});
main.add(pawnB1);
var pawnB2 = new UI.Image({
  position: new Vector2(18, 18),
  size: new Vector2(18,18),
  image: 'images/pawnB.png'
});
main.add(pawnB2);
var pawnB3 = new UI.Image({
  position: new Vector2(36, 18),
  size: new Vector2(18,18),
  image: 'images/pawnB.png'
});
main.add(pawnB3);
var pawnB4 = new UI.Image({
  position: new Vector2(54, 18),
  size: new Vector2(18,18),
  image: 'images/pawnB.png'
});
main.add(pawnB4);
var pawnB5 = new UI.Image({
  position: new Vector2(72, 18),
  size: new Vector2(18,18),
  image: 'images/pawnB.png'
});
main.add(pawnB5);
var pawnB6 = new UI.Image({
  position: new Vector2(90, 18),
  size: new Vector2(18,18),
  image: 'images/pawnB.png'
});
main.add(pawnB6);
var pawnB7 = new UI.Image({
  position: new Vector2(108, 18),
  size: new Vector2(18,18),
  image: 'images/pawnB.png'
});
main.add(pawnB7);
var pawnB8 = new UI.Image({
  position: new Vector2(126, 18),
  size: new Vector2(18,18),
  image: 'images/pawnB.png'
});
main.add(pawnB8);

//draw white pawns
var pawnW1 = new UI.Image({
  position: new Vector2(0, 108),
  size: new Vector2(18,18),
  image: 'images/pawnW.png'
});
main.add(pawnW1);
var pawnW2 = new UI.Image({
  position: new Vector2(18, 108),
  size: new Vector2(18,18),
  image: 'images/pawnW.png'
});
main.add(pawnW2);
var pawnW3 = new UI.Image({
  position: new Vector2(36, 108),
  size: new Vector2(18,18),
  image: 'images/pawnW.png'
});
main.add(pawnW3);
var pawnW4 = new UI.Image({
  position: new Vector2(54, 108),
  size: new Vector2(18,18),
  image: 'images/pawnW.png'
});
main.add(pawnW4);
var pawnW5 = new UI.Image({
  position: new Vector2(72, 108),
  size: new Vector2(18,18),
  image: 'images/pawnW.png'
});
main.add(pawnW5);
var pawnW6 = new UI.Image({
  position: new Vector2(90, 108),
  size: new Vector2(18,18),
  image: 'images/pawnW.png'
});
main.add(pawnW6);
var pawnW7 = new UI.Image({
  position: new Vector2(108, 108),
  size: new Vector2(18,18),
  image: 'images/pawnW.png'
});
main.add(pawnW7);
var pawnW8 = new UI.Image({
  position: new Vector2(126, 108),
  size: new Vector2(18,18),
  image: 'images/pawnW.png'
});
main.add(pawnW8);



main.show();

// main.on('click', 'select', function(e) {
//   var wind = new UI.Window();
//   var textfield = new UI.Text({
//     position: new Vector2(0, 50),
//     size: new Vector2(144, 30),
//     font: 'gothic-24-bold',
//     text: 'Text Anywhere!',
//     textAlign: 'center'
//   });
//   wind.add(textfield);
//   wind.show();
// });

// main.on('click', 'up', function(e) {
//   var menu = new UI.Menu({
//     sections: [{
//       items: [{
//         title: 'Pebble.js',
//         icon: 'images/menu_icon.png',
//         subtitle: 'Can do Menus'
//       }, {
//         title: 'Second Item',
//         subtitle: 'Subtitle Text'
//       }]
//     }]
//   });
//   menu.on('select', function(e) {
//     console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
//     console.log('The item is titled "' + e.item.title + '"');
//   });
//   menu.show();
// });



// main.on('click', 'down', function(e) {
//   var card = new UI.Card();
//   card.title('A Card');
//   card.subtitle('Is a Window');
//   card.body('The simplest window type in Pebble.js.');
//   card.show();
// });