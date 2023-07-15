import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    // OAuth authentication providers...
    GithubProvider({
      clientId: "894fe82bdc49ed979161",
      clientSecret: "8bc661e3d34b26eeded76494dcfa07334459f2e3",
      // clientId: process.env.NEXT_PUBLIC_GITHUB_ID,
      // clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId:
        "331322001235-bm3u855g1s8psb35uuh64d4fgismq0m8.apps.googleusercontent.com",
      clientSecret: "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",
      // clientId: process.env.NEXT_PUBLIC_GOOGLE_ID,
      // clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET
    }),
  ],
  secret: "thdud",
};
export default NextAuth(authOptions);
