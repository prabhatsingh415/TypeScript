interface newUser {
  readonly id: number; // readonly property
  email: string;
  name: string;
  isActive: boolean;
  age?: number; // optional property
  startTrial: () => string; // method that returns a string
  getCoupon(couponName: string, value: number): number; // method that takes parameters and returns a number
}

// interface reopening

interface newUser {
  githubToken: string; // new property added to the existing interface
}

enum role {
  ADMIN,
  USER,
  GUEST,
}
// interface followes inheritance rules
interface Admin extends newUser {
  role: role;
}

let adminUser: Admin = {
  id: 2,
  email: "",
  githubToken: "ghp_admin1234567890abcdef",
  name: "AdminUser",
  isActive: true,
  role: role.ADMIN,
  startTrial: () => {
    return "Admin trial started";
  },
  getCoupon: (couponName: string, value: number) => {
    return 20;
  },
};

let user: newUser = {
  id: 1,
  email: "joy@you.com",
  githubToken: "ghp_1234567890abcdef",
  name: "Joy",
  isActive: true,
  startTrial: () => {
    return "Trial started";
  },
  getCoupon: (couponName: string, value: number) => {
    return 10;
  },
};
console.log(user.startTrial());
console.log(user.getCoupon("NEWUSER", 100));

export {};
