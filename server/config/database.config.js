module.exports = (mongoose) => {
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://127.0.0.1/scrum_proj');
}