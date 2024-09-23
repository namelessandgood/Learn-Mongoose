const mongoose = require('mongoose');

const User = require('./User');

mongoose.connect('************');

// create();
find();

async function find() {
    try {
        
        // const user = await User.where('name').equals('bob')
        //     .where('age').gt(3).lt(33).populate("bestFriend");
        // console.log(user[0]);
        
        // const user=await User.findOne({name:'bob'});
        // user.hello();
        // user[0].bestFriend = '66efd5eb0b5300008b47dd03';
        // user[0].save();

        // const user = await User.findByAge(23);
        // console.log(user);

        // const user = await User.findByName('bob');
		// console.log(user);
        
        const user = await User.findOne();
        // user.updateMany({},{email:"hello@gmail.com"})
        await user.save();
        // console.log(user);
        // console.log(await User.findByAge(32));

        // console.log(user.nameAge);
    } catch (e) {
        console.log(e.message)
    }
}

// 24.:14 schema 

async function create() {
	try {
		const user = await User.create({
			name: 'bob',
			age: 33,
            email:"nafldkj@gmail.com",
			address: {
				street: 'new streets  da',
				city: 'new citysdfds',
			},
			hobbies: ['games', 'food and sleep'],
		});

		// const user = User.create({name:"bob",age:33}); // save automatice
		// user.name='alex'; // save local not in database
		// user.save() // is save the update

		// const user= new User({name:"Ali+1",age:23+1});
		// await user.save()

		console.log(`user is save ${user}`);
	} catch (e) {
		console.log(e.message);
	}
}

