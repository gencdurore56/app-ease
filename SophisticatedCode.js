// Filename: SophisticatedCode.js
// Description: This code demonstrates a complex and sophisticated implementation of a social media application.

// Define a User class
class User {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.posts = [];
  }

  addPost(title, content) {
    const post = new Post(title, content);
    this.posts.push(post);
  }

  getPostsCount() {
    return this.posts.length;
  }
}

// Define a Post class
class Post {
  constructor(title, content) {
    this.title = title;
    this.content = content;
    this.likes = 0;
  }

  like() {
    this.likes++;
  }
}

// Create some users
const user1 = new User("John Doe", 25, "john.doe@gmail.com");
const user2 = new User("Jane Smith", 30, "jane.smith@yahoo.com");

// Add posts to users
user1.addPost("My first post", "Hello world!");
user2.addPost("Hello from Jane", "What a beautiful day!");

// Like some posts
user1.posts[0].like();
user2.posts[0].like();
user2.posts[0].like();

// Print the user details and posts count
console.log(`User 1: Name: ${user1.name}, Age: ${user1.age}, Email: ${user1.email}`);
console.log(`User 2: Name: ${user2.name}, Age: ${user2.age}, Email: ${user2.email}`);
console.log(`User 1 Posts Count: ${user1.getPostsCount()}`);
console.log(`User 2 Posts Count: ${user2.getPostsCount()}`);

// Output:
// User 1: Name: John Doe, Age: 25, Email: john.doe@gmail.com
// User 2: Name: Jane Smith, Age: 30, Email: jane.smith@yahoo.com
// User 1 Posts Count: 1
// User 2 Posts Count: 1