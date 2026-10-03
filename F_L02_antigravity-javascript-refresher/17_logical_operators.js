const hasPrerequisite = true;
const hasEnrolled = true;
const isBlocked = false;

const canTakeAppDev = hasPrerequisite && hasEnrolled && !isBlocked;
console.log("Can take APPDEV1:", canTakeAppDev);

const providedUsername = "";
const defaultUsername = "GuestStudent";
const activeUser = providedUsername || defaultUsername;
console.log("Active user:", activeUser);

const isOnline = true;
isOnline && console.log("Student is active on the network.");