// import { PointObject } from 'graphql-geojson';

const resolvers = {
//  PointObject: PointObject,
  Query: {
    posts(obj, args, context) {
      return context.Posts.getPosts();
    }
  },
  Mutation: {
    addPost(obj, args, context) {
      const newPost = {type: args.type, handle: context.user.handle, message: args.message};

      return context.Posts.addPost(newPost);
    }
  }
}

export default resolvers;
