// each musician will be held in a profileClass
class ProfileClass {
  constructor(name, about, website, picture, concerts, lessons, social_media) {
    this.name = name;
    this.about = about;
    this.website = website;
    this.picture = picture;
    this.concerts = concerts;
    this.lessons = lessons;
    this.social_media = social_media;
  }

  // returns a string or false for availability p
  availability() {
    if (this.concerts || this.lessons) {
      if (this.concerts && this.lessons) {
        return "Available for music lessons and concerts";
      } else {
        let available_item = this.concerts ? "concerts" : "music lessons";
        return "Available for " + available_item + ".";
      }
    } else {
      return false;
    }
  }
}

export default ProfileClass;
