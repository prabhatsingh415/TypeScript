enum subscriptionType { // Enum for different subscription levels
  FREE,
  GOLD,
  DIAMOND,
}

let user1Subscription = subscriptionType.FREE;
let user2Subscription = subscriptionType.GOLD;
let user3Subscription = subscriptionType.DIAMOND;

//we can also assign custom values to enum members
enum responseStatus {
  SUCCESS = 200,
  NOT_FOUND = 404,
  SERVER_ERROR = 500,
}
let response1 = responseStatus.SUCCESS;
let response2 = responseStatus.NOT_FOUND;
let response3 = responseStatus.SERVER_ERROR;

// String enums
enum direction {
  NORTH = "NORTH",
  SOUTH = "SOUTH",
  EAST = "EAST",
  WEST = "WEST",
}
let move1 = direction.NORTH;
let move2 = direction.SOUTH;
let move3 = direction.EAST;
let move4 = direction.WEST;

// mixing string and numeric members
enum mixedEnum {
  NO = 0,
  YES = "YES",
}
let answer1 = mixedEnum.NO;
let answer2 = mixedEnum.YES;
