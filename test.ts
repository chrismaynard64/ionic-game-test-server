
import  mongoose, { Schema, Document} from 'mongoose';
import User, { IUser, UserSchema} from './schema/user';


mongoose.connect('mongodb://webuser:I.amThe0ne@ds235437.mlab.com:35437/game',{useNewUrlParser: true});

var db = mongoose.connection;
 
db.on('error', console.error.bind(console, 'connection error:'));
 
db.once('open', function() {
    console.log("Connection Successful!");
      // a document instance
    let  user = new User({ name: 'Bill', email: 'test@test.com', gameHistory: 'No history yet' });
 
    // save model to database
    user.save(function (err, book) {
      if (err) return console.error(err);
      console.log(book.name + " saved to user collection.");
    });
    
});