const kSDelay = new Promise(resolve => setTimeout(resolve, 100));
const kMDelay = new Promise(resolve => setTimeout(resolve, 500));
const kLDelay = new Promise(resolve => setTimeout(resolve, 1000));

export {
    kLDelay,
    kMDelay,
    kSDelay
}
