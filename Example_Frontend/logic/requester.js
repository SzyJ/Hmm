// === Begin Server Mock === //
//var REQUEST_RESPONSE_SIZE = 5;
//var nextMockRespIndex = 0;
//var mockResponses =
//[
//    "36\0Title Number 36\0Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu sem, feugiat a ultrices vitae, laoreet a eros. Maecenas rhoncus interdum vulputate. Praesent eu sapien erat. Ut quis semper dui. Nam in ipsum elementum, facilisis dolor eu, tristique orci. Suspendisse facilisis sollicitudin augue, ut laoreet nulla accumsan viverra. Aliquam efficitur leo velit, in commodo augue suscipit ut. In condimentum congue neque vitae fermentum. Nulla quam risus, blandit eget scelerisque sit amet, tristique id eros. Vivamus venenatis magna at vehicula dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin ultrices eget elit at aliquam. Phasellus at vehicula lacus, et venenatis sapien. Suspendisse molestie ultrices cursus. Duis dignissim orci non tempus luctus.\0",
//    "35\0Title Number 35\0Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu sem, feugiat a ultrices vitae, laoreet a eros. Maecenas rhoncus interdum vulputate. Praesent eu sapien erat. Ut quis semper dui. Nam in ipsum elementum, facilisis dolor eu, tristique orci. Suspendisse facilisis sollicitudin augue, ut laoreet nulla accumsan viverra. Aliquam efficitur leo velit, in commodo augue suscipit ut. In condimentum congue neque vitae fermentum. Nulla quam risus, blandit eget scelerisque sit amet, tristique id eros. Vivamus venenatis magna at vehicula dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin ultrices eget elit at aliquam. Phasellus at vehicula lacus, et venenatis sapien. Suspendisse molestie ultrices cursus. Duis dignissim orci non tempus luctus.\0",
//    "34\0Title Number 34\0Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu sem, feugiat a ultrices vitae, laoreet a eros. Maecenas rhoncus interdum vulputate. Praesent eu sapien erat. Ut quis semper dui. Nam in ipsum elementum, facilisis dolor eu, tristique orci. Suspendisse facilisis sollicitudin augue, ut laoreet nulla accumsan viverra. Aliquam efficitur leo velit, in commodo augue suscipit ut. In condimentum congue neque vitae fermentum. Nulla quam risus, blandit eget scelerisque sit amet, tristique id eros. Vivamus venenatis magna at vehicula dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin ultrices eget elit at aliquam. Phasellus at vehicula lacus, et venenatis sapien. Suspendisse molestie ultrices cursus. Duis dignissim orci non tempus luctus.\0",
//    "33\0Title Number 33\0Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu sem, feugiat a ultrices vitae, laoreet a eros. Maecenas rhoncus interdum vulputate. Praesent eu sapien erat. Ut quis semper dui. Nam in ipsum elementum, facilisis dolor eu, tristique orci. Suspendisse facilisis sollicitudin augue, ut laoreet nulla accumsan viverra. Aliquam efficitur leo velit, in commodo augue suscipit ut. In condimentum congue neque vitae fermentum. Nulla quam risus, blandit eget scelerisque sit amet, tristique id eros. Vivamus venenatis magna at vehicula dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin ultrices eget elit at aliquam. Phasellus at vehicula lacus, et venenatis sapien. Suspendisse molestie ultrices cursus. Duis dignissim orci non tempus luctus.\0",
//    "32\0Title Number 32\0Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu sem, feugiat a ultrices vitae, laoreet a eros. Maecenas rhoncus interdum vulputate. Praesent eu sapien erat. Ut quis semper dui. Nam in ipsum elementum, facilisis dolor eu, tristique orci. Suspendisse facilisis sollicitudin augue, ut laoreet nulla accumsan viverra. Aliquam efficitur leo velit, in commodo augue suscipit ut. In condimentum congue neque vitae fermentum. Nulla quam risus, blandit eget scelerisque sit amet, tristique id eros. Vivamus venenatis magna at vehicula dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin ultrices eget elit at aliquam. Phasellus at vehicula lacus, et venenatis sapien. Suspendisse molestie ultrices cursus. Duis dignissim orci non tempus luctus.\0",
//    "31\0Title Number 31\0Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu sem, feugiat a ultrices vitae, laoreet a eros. Maecenas rhoncus interdum vulputate. Praesent eu sapien erat. Ut quis semper dui. Nam in ipsum elementum, facilisis dolor eu, tristique orci. Suspendisse facilisis sollicitudin augue, ut laoreet nulla accumsan viverra. Aliquam efficitur leo velit, in commodo augue suscipit ut. In condimentum congue neque vitae fermentum. Nulla quam risus, blandit eget scelerisque sit amet, tristique id eros. Vivamus venenatis magna at vehicula dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin ultrices eget elit at aliquam. Phasellus at vehicula lacus, et venenatis sapien. Suspendisse molestie ultrices cursus. Duis dignissim orci non tempus luctus.\0",
//    "30\0Title Number 30\0Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu sem, feugiat a ultrices vitae, laoreet a eros. Maecenas rhoncus interdum vulputate. Praesent eu sapien erat. Ut quis semper dui. Nam in ipsum elementum, facilisis dolor eu, tristique orci. Suspendisse facilisis sollicitudin augue, ut laoreet nulla accumsan viverra. Aliquam efficitur leo velit, in commodo augue suscipit ut. In condimentum congue neque vitae fermentum. Nulla quam risus, blandit eget scelerisque sit amet, tristique id eros. Vivamus venenatis magna at vehicula dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin ultrices eget elit at aliquam. Phasellus at vehicula lacus, et venenatis sapien. Suspendisse molestie ultrices cursus. Duis dignissim orci non tempus luctus.\0",
//    "29\0Title Number 29\0Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu sem, feugiat a ultrices vitae, laoreet a eros. Maecenas rhoncus interdum vulputate. Praesent eu sapien erat. Ut quis semper dui. Nam in ipsum elementum, facilisis dolor eu, tristique orci. Suspendisse facilisis sollicitudin augue, ut laoreet nulla accumsan viverra. Aliquam efficitur leo velit, in commodo augue suscipit ut. In condimentum congue neque vitae fermentum. Nulla quam risus, blandit eget scelerisque sit amet, tristique id eros. Vivamus venenatis magna at vehicula dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin ultrices eget elit at aliquam. Phasellus at vehicula lacus, et venenatis sapien. Suspendisse molestie ultrices cursus. Duis dignissim orci non tempus luctus.\0",
//    "28\0Title Number 28\0Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu sem, feugiat a ultrices vitae, laoreet a eros. Maecenas rhoncus interdum vulputate. Praesent eu sapien erat. Ut quis semper dui. Nam in ipsum elementum, facilisis dolor eu, tristique orci. Suspendisse facilisis sollicitudin augue, ut laoreet nulla accumsan viverra. Aliquam efficitur leo velit, in commodo augue suscipit ut. In condimentum congue neque vitae fermentum. Nulla quam risus, blandit eget scelerisque sit amet, tristique id eros. Vivamus venenatis magna at vehicula dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin ultrices eget elit at aliquam. Phasellus at vehicula lacus, et venenatis sapien. Suspendisse molestie ultrices cursus. Duis dignissim orci non tempus luctus.\0",
//    "27\0Title Number 27\0Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu sem, feugiat a ultrices vitae, laoreet a eros. Maecenas rhoncus interdum vulputate. Praesent eu sapien erat. Ut quis semper dui. Nam in ipsum elementum, facilisis dolor eu, tristique orci. Suspendisse facilisis sollicitudin augue, ut laoreet nulla accumsan viverra. Aliquam efficitur leo velit, in commodo augue suscipit ut. In condimentum congue neque vitae fermentum. Nulla quam risus, blandit eget scelerisque sit amet, tristique id eros. Vivamus venenatis magna at vehicula dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin ultrices eget elit at aliquam. Phasellus at vehicula lacus, et venenatis sapien. Suspendisse molestie ultrices cursus. Duis dignissim orci non tempus luctus.\0",
//    "26\0Title Number 26\0Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu sem, feugiat a ultrices vitae, laoreet a eros. Maecenas rhoncus interdum vulputate. Praesent eu sapien erat. Ut quis semper dui. Nam in ipsum elementum, facilisis dolor eu, tristique orci. Suspendisse facilisis sollicitudin augue, ut laoreet nulla accumsan viverra. Aliquam efficitur leo velit, in commodo augue suscipit ut. In condimentum congue neque vitae fermentum. Nulla quam risus, blandit eget scelerisque sit amet, tristique id eros. Vivamus venenatis magna at vehicula dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin ultrices eget elit at aliquam. Phasellus at vehicula lacus, et venenatis sapien. Suspendisse molestie ultrices cursus. Duis dignissim orci non tempus luctus.\0",
//    "25\0Title Number 25\0Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu sem, feugiat a ultrices vitae, laoreet a eros. Maecenas rhoncus interdum vulputate. Praesent eu sapien erat. Ut quis semper dui. Nam in ipsum elementum, facilisis dolor eu, tristique orci. Suspendisse facilisis sollicitudin augue, ut laoreet nulla accumsan viverra. Aliquam efficitur leo velit, in commodo augue suscipit ut. In condimentum congue neque vitae fermentum. Nulla quam risus, blandit eget scelerisque sit amet, tristique id eros. Vivamus venenatis magna at vehicula dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin ultrices eget elit at aliquam. Phasellus at vehicula lacus, et venenatis sapien. Suspendisse molestie ultrices cursus. Duis dignissim orci non tempus luctus.\0",
//    "24\0Title Number 24\0Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu sem, feugiat a ultrices vitae, laoreet a eros. Maecenas rhoncus interdum vulputate. Praesent eu sapien erat. Ut quis semper dui. Nam in ipsum elementum, facilisis dolor eu, tristique orci. Suspendisse facilisis sollicitudin augue, ut laoreet nulla accumsan viverra. Aliquam efficitur leo velit, in commodo augue suscipit ut. In condimentum congue neque vitae fermentum. Nulla quam risus, blandit eget scelerisque sit amet, tristique id eros. Vivamus venenatis magna at vehicula dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin ultrices eget elit at aliquam. Phasellus at vehicula lacus, et venenatis sapien. Suspendisse molestie ultrices cursus. Duis dignissim orci non tempus luctus.\0",
//    "23\0Title Number 23\0Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu sem, feugiat a ultrices vitae, laoreet a eros. Maecenas rhoncus interdum vulputate. Praesent eu sapien erat. Ut quis semper dui. Nam in ipsum elementum, facilisis dolor eu, tristique orci. Suspendisse facilisis sollicitudin augue, ut laoreet nulla accumsan viverra. Aliquam efficitur leo velit, in commodo augue suscipit ut. In condimentum congue neque vitae fermentum. Nulla quam risus, blandit eget scelerisque sit amet, tristique id eros. Vivamus venenatis magna at vehicula dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin ultrices eget elit at aliquam. Phasellus at vehicula lacus, et venenatis sapien. Suspendisse molestie ultrices cursus. Duis dignissim orci non tempus luctus.\0",
//    "22\0Title Number 22\0Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu sem, feugiat a ultrices vitae, laoreet a eros. Maecenas rhoncus interdum vulputate. Praesent eu sapien erat. Ut quis semper dui. Nam in ipsum elementum, facilisis dolor eu, tristique orci. Suspendisse facilisis sollicitudin augue, ut laoreet nulla accumsan viverra. Aliquam efficitur leo velit, in commodo augue suscipit ut. In condimentum congue neque vitae fermentum. Nulla quam risus, blandit eget scelerisque sit amet, tristique id eros. Vivamus venenatis magna at vehicula dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin ultrices eget elit at aliquam. Phasellus at vehicula lacus, et venenatis sapien. Suspendisse molestie ultrices cursus. Duis dignissim orci non tempus luctus.\0",
//    "21\0Title Number 21\0Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu sem, feugiat a ultrices vitae, laoreet a eros. Maecenas rhoncus interdum vulputate. Praesent eu sapien erat. Ut quis semper dui. Nam in ipsum elementum, facilisis dolor eu, tristique orci. Suspendisse facilisis sollicitudin augue, ut laoreet nulla accumsan viverra. Aliquam efficitur leo velit, in commodo augue suscipit ut. In condimentum congue neque vitae fermentum. Nulla quam risus, blandit eget scelerisque sit amet, tristique id eros. Vivamus venenatis magna at vehicula dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin ultrices eget elit at aliquam. Phasellus at vehicula lacus, et venenatis sapien. Suspendisse molestie ultrices cursus. Duis dignissim orci non tempus luctus.\0",
//    "20\0Title Number 20\0Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu sem, feugiat a ultrices vitae, laoreet a eros. Maecenas rhoncus interdum vulputate. Praesent eu sapien erat. Ut quis semper dui. Nam in ipsum elementum, facilisis dolor eu, tristique orci. Suspendisse facilisis sollicitudin augue, ut laoreet nulla accumsan viverra. Aliquam efficitur leo velit, in commodo augue suscipit ut. In condimentum congue neque vitae fermentum. Nulla quam risus, blandit eget scelerisque sit amet, tristique id eros. Vivamus venenatis magna at vehicula dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin ultrices eget elit at aliquam. Phasellus at vehicula lacus, et venenatis sapien. Suspendisse molestie ultrices cursus. Duis dignissim orci non tempus luctus.\0",
//    "19\0Title Number 19\0Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu sem, feugiat a ultrices vitae, laoreet a eros. Maecenas rhoncus interdum vulputate. Praesent eu sapien erat. Ut quis semper dui. Nam in ipsum elementum, facilisis dolor eu, tristique orci. Suspendisse facilisis sollicitudin augue, ut laoreet nulla accumsan viverra. Aliquam efficitur leo velit, in commodo augue suscipit ut. In condimentum congue neque vitae fermentum. Nulla quam risus, blandit eget scelerisque sit amet, tristique id eros. Vivamus venenatis magna at vehicula dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin ultrices eget elit at aliquam. Phasellus at vehicula lacus, et venenatis sapien. Suspendisse molestie ultrices cursus. Duis dignissim orci non tempus luctus.\0",
//    "18\0Title Number 18\0Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu sem, feugiat a ultrices vitae, laoreet a eros. Maecenas rhoncus interdum vulputate. Praesent eu sapien erat. Ut quis semper dui. Nam in ipsum elementum, facilisis dolor eu, tristique orci. Suspendisse facilisis sollicitudin augue, ut laoreet nulla accumsan viverra. Aliquam efficitur leo velit, in commodo augue suscipit ut. In condimentum congue neque vitae fermentum. Nulla quam risus, blandit eget scelerisque sit amet, tristique id eros. Vivamus venenatis magna at vehicula dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin ultrices eget elit at aliquam. Phasellus at vehicula lacus, et venenatis sapien. Suspendisse molestie ultrices cursus. Duis dignissim orci non tempus luctus.\0",
//    "17\0Title Number 17\0Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu sem, feugiat a ultrices vitae, laoreet a eros. Maecenas rhoncus interdum vulputate. Praesent eu sapien erat. Ut quis semper dui. Nam in ipsum elementum, facilisis dolor eu, tristique orci. Suspendisse facilisis sollicitudin augue, ut laoreet nulla accumsan viverra. Aliquam efficitur leo velit, in commodo augue suscipit ut. In condimentum congue neque vitae fermentum. Nulla quam risus, blandit eget scelerisque sit amet, tristique id eros. Vivamus venenatis magna at vehicula dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin ultrices eget elit at aliquam. Phasellus at vehicula lacus, et venenatis sapien. Suspendisse molestie ultrices cursus. Duis dignissim orci non tempus luctus.\0",
//    "16\0Title Number 16\0Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu sem, feugiat a ultrices vitae, laoreet a eros. Maecenas rhoncus interdum vulputate. Praesent eu sapien erat. Ut quis semper dui. Nam in ipsum elementum, facilisis dolor eu, tristique orci. Suspendisse facilisis sollicitudin augue, ut laoreet nulla accumsan viverra. Aliquam efficitur leo velit, in commodo augue suscipit ut. In condimentum congue neque vitae fermentum. Nulla quam risus, blandit eget scelerisque sit amet, tristique id eros. Vivamus venenatis magna at vehicula dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin ultrices eget elit at aliquam. Phasellus at vehicula lacus, et venenatis sapien. Suspendisse molestie ultrices cursus. Duis dignissim orci non tempus luctus.\0",
//    "15\0Title Number 15\0Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu sem, feugiat a ultrices vitae, laoreet a eros. Maecenas rhoncus interdum vulputate. Praesent eu sapien erat. Ut quis semper dui. Nam in ipsum elementum, facilisis dolor eu, tristique orci. Suspendisse facilisis sollicitudin augue, ut laoreet nulla accumsan viverra. Aliquam efficitur leo velit, in commodo augue suscipit ut. In condimentum congue neque vitae fermentum. Nulla quam risus, blandit eget scelerisque sit amet, tristique id eros. Vivamus venenatis magna at vehicula dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin ultrices eget elit at aliquam. Phasellus at vehicula lacus, et venenatis sapien. Suspendisse molestie ultrices cursus. Duis dignissim orci non tempus luctus.\0",
//    "14\0Title Number 14\0Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu sem, feugiat a ultrices vitae, laoreet a eros. Maecenas rhoncus interdum vulputate. Praesent eu sapien erat. Ut quis semper dui. Nam in ipsum elementum, facilisis dolor eu, tristique orci. Suspendisse facilisis sollicitudin augue, ut laoreet nulla accumsan viverra. Aliquam efficitur leo velit, in commodo augue suscipit ut. In condimentum congue neque vitae fermentum. Nulla quam risus, blandit eget scelerisque sit amet, tristique id eros. Vivamus venenatis magna at vehicula dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin ultrices eget elit at aliquam. Phasellus at vehicula lacus, et venenatis sapien. Suspendisse molestie ultrices cursus. Duis dignissim orci non tempus luctus.\0",
//    "13\0Title Number 13\0Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu sem, feugiat a ultrices vitae, laoreet a eros. Maecenas rhoncus interdum vulputate. Praesent eu sapien erat. Ut quis semper dui. Nam in ipsum elementum, facilisis dolor eu, tristique orci. Suspendisse facilisis sollicitudin augue, ut laoreet nulla accumsan viverra. Aliquam efficitur leo velit, in commodo augue suscipit ut. In condimentum congue neque vitae fermentum. Nulla quam risus, blandit eget scelerisque sit amet, tristique id eros. Vivamus venenatis magna at vehicula dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin ultrices eget elit at aliquam. Phasellus at vehicula lacus, et venenatis sapien. Suspendisse molestie ultrices cursus. Duis dignissim orci non tempus luctus.\0",
//    "12\0Title Number 12\0Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu sem, feugiat a ultrices vitae, laoreet a eros. Maecenas rhoncus interdum vulputate. Praesent eu sapien erat. Ut quis semper dui. Nam in ipsum elementum, facilisis dolor eu, tristique orci. Suspendisse facilisis sollicitudin augue, ut laoreet nulla accumsan viverra. Aliquam efficitur leo velit, in commodo augue suscipit ut. In condimentum congue neque vitae fermentum. Nulla quam risus, blandit eget scelerisque sit amet, tristique id eros. Vivamus venenatis magna at vehicula dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin ultrices eget elit at aliquam. Phasellus at vehicula lacus, et venenatis sapien. Suspendisse molestie ultrices cursus. Duis dignissim orci non tempus luctus.\0",
//    "11\0Title Number 11\0Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu sem, feugiat a ultrices vitae, laoreet a eros. Maecenas rhoncus interdum vulputate. Praesent eu sapien erat. Ut quis semper dui. Nam in ipsum elementum, facilisis dolor eu, tristique orci. Suspendisse facilisis sollicitudin augue, ut laoreet nulla accumsan viverra. Aliquam efficitur leo velit, in commodo augue suscipit ut. In condimentum congue neque vitae fermentum. Nulla quam risus, blandit eget scelerisque sit amet, tristique id eros. Vivamus venenatis magna at vehicula dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin ultrices eget elit at aliquam. Phasellus at vehicula lacus, et venenatis sapien. Suspendisse molestie ultrices cursus. Duis dignissim orci non tempus luctus.\0",
//    "10\0Title Number 10\0Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu sem, feugiat a ultrices vitae, laoreet a eros. Maecenas rhoncus interdum vulputate. Praesent eu sapien erat. Ut quis semper dui. Nam in ipsum elementum, facilisis dolor eu, tristique orci. Suspendisse facilisis sollicitudin augue, ut laoreet nulla accumsan viverra. Aliquam efficitur leo velit, in commodo augue suscipit ut. In condimentum congue neque vitae fermentum. Nulla quam risus, blandit eget scelerisque sit amet, tristique id eros. Vivamus venenatis magna at vehicula dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin ultrices eget elit at aliquam. Phasellus at vehicula lacus, et venenatis sapien. Suspendisse molestie ultrices cursus. Duis dignissim orci non tempus luctus.\0",
//    "9\0Title Number 9\0Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu sem, feugiat a ultrices vitae, laoreet a eros. Maecenas rhoncus interdum vulputate. Praesent eu sapien erat. Ut quis semper dui. Nam in ipsum elementum, facilisis dolor eu, tristique orci. Suspendisse facilisis sollicitudin augue, ut laoreet nulla accumsan viverra. Aliquam efficitur leo velit, in commodo augue suscipit ut. In condimentum congue neque vitae fermentum. Nulla quam risus, blandit eget scelerisque sit amet, tristique id eros. Vivamus venenatis magna at vehicula dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin ultrices eget elit at aliquam. Phasellus at vehicula lacus, et venenatis sapien. Suspendisse molestie ultrices cursus. Duis dignissim orci non tempus luctus.\0",
//    "8\0Title Number 8\0Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu sem, feugiat a ultrices vitae, laoreet a eros. Maecenas rhoncus interdum vulputate. Praesent eu sapien erat. Ut quis semper dui. Nam in ipsum elementum, facilisis dolor eu, tristique orci. Suspendisse facilisis sollicitudin augue, ut laoreet nulla accumsan viverra. Aliquam efficitur leo velit, in commodo augue suscipit ut. In condimentum congue neque vitae fermentum. Nulla quam risus, blandit eget scelerisque sit amet, tristique id eros. Vivamus venenatis magna at vehicula dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin ultrices eget elit at aliquam. Phasellus at vehicula lacus, et venenatis sapien. Suspendisse molestie ultrices cursus. Duis dignissim orci non tempus luctus.\0",
//    "7\0Title Number 7\0Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu sem, feugiat a ultrices vitae, laoreet a eros. Maecenas rhoncus interdum vulputate. Praesent eu sapien erat. Ut quis semper dui. Nam in ipsum elementum, facilisis dolor eu, tristique orci. Suspendisse facilisis sollicitudin augue, ut laoreet nulla accumsan viverra. Aliquam efficitur leo velit, in commodo augue suscipit ut. In condimentum congue neque vitae fermentum. Nulla quam risus, blandit eget scelerisque sit amet, tristique id eros. Vivamus venenatis magna at vehicula dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin ultrices eget elit at aliquam. Phasellus at vehicula lacus, et venenatis sapien. Suspendisse molestie ultrices cursus. Duis dignissim orci non tempus luctus.\0",
//    "6\0Title Number 6\0Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu sem, feugiat a ultrices vitae, laoreet a eros. Maecenas rhoncus interdum vulputate. Praesent eu sapien erat. Ut quis semper dui. Nam in ipsum elementum, facilisis dolor eu, tristique orci. Suspendisse facilisis sollicitudin augue, ut laoreet nulla accumsan viverra. Aliquam efficitur leo velit, in commodo augue suscipit ut. In condimentum congue neque vitae fermentum. Nulla quam risus, blandit eget scelerisque sit amet, tristique id eros. Vivamus venenatis magna at vehicula dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin ultrices eget elit at aliquam. Phasellus at vehicula lacus, et venenatis sapien. Suspendisse molestie ultrices cursus. Duis dignissim orci non tempus luctus.\0",
//    "5\0Title Number 5\0Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu sem, feugiat a ultrices vitae, laoreet a eros. Maecenas rhoncus interdum vulputate. Praesent eu sapien erat. Ut quis semper dui. Nam in ipsum elementum, facilisis dolor eu, tristique orci. Suspendisse facilisis sollicitudin augue, ut laoreet nulla accumsan viverra. Aliquam efficitur leo velit, in commodo augue suscipit ut. In condimentum congue neque vitae fermentum. Nulla quam risus, blandit eget scelerisque sit amet, tristique id eros. Vivamus venenatis magna at vehicula dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin ultrices eget elit at aliquam. Phasellus at vehicula lacus, et venenatis sapien. Suspendisse molestie ultrices cursus. Duis dignissim orci non tempus luctus.\0",
//    "4\0Title Number 4\0Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu sem, feugiat a ultrices vitae, laoreet a eros. Maecenas rhoncus interdum vulputate. Praesent eu sapien erat. Ut quis semper dui. Nam in ipsum elementum, facilisis dolor eu, tristique orci. Suspendisse facilisis sollicitudin augue, ut laoreet nulla accumsan viverra. Aliquam efficitur leo velit, in commodo augue suscipit ut. In condimentum congue neque vitae fermentum. Nulla quam risus, blandit eget scelerisque sit amet, tristique id eros. Vivamus venenatis magna at vehicula dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin ultrices eget elit at aliquam. Phasellus at vehicula lacus, et venenatis sapien. Suspendisse molestie ultrices cursus. Duis dignissim orci non tempus luctus.\0",
//    "3\0Title Number 3\0Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu sem, feugiat a ultrices vitae, laoreet a eros. Maecenas rhoncus interdum vulputate. Praesent eu sapien erat. Ut quis semper dui. Nam in ipsum elementum, facilisis dolor eu, tristique orci. Suspendisse facilisis sollicitudin augue, ut laoreet nulla accumsan viverra. Aliquam efficitur leo velit, in commodo augue suscipit ut. In condimentum congue neque vitae fermentum. Nulla quam risus, blandit eget scelerisque sit amet, tristique id eros. Vivamus venenatis magna at vehicula dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin ultrices eget elit at aliquam. Phasellus at vehicula lacus, et venenatis sapien. Suspendisse molestie ultrices cursus. Duis dignissim orci non tempus luctus.\0",
//    "2\0Title Number 2\0Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu sem, feugiat a ultrices vitae, laoreet a eros. Maecenas rhoncus interdum vulputate. Praesent eu sapien erat. Ut quis semper dui. Nam in ipsum elementum, facilisis dolor eu, tristique orci. Suspendisse facilisis sollicitudin augue, ut laoreet nulla accumsan viverra. Aliquam efficitur leo velit, in commodo augue suscipit ut. In condimentum congue neque vitae fermentum. Nulla quam risus, blandit eget scelerisque sit amet, tristique id eros. Vivamus venenatis magna at vehicula dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin ultrices eget elit at aliquam. Phasellus at vehicula lacus, et venenatis sapien. Suspendisse molestie ultrices cursus. Duis dignissim orci non tempus luctus.\0",
//    "1\0Title Number 1\0Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu sem, feugiat a ultrices vitae, laoreet a eros. Maecenas rhoncus interdum vulputate. Praesent eu sapien erat. Ut quis semper dui. Nam in ipsum elementum, facilisis dolor eu, tristique orci. Suspendisse facilisis sollicitudin augue, ut laoreet nulla accumsan viverra. Aliquam efficitur leo velit, in commodo augue suscipit ut. In condimentum congue neque vitae fermentum. Nulla quam risus, blandit eget scelerisque sit amet, tristique id eros. Vivamus venenatis magna at vehicula dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin ultrices eget elit at aliquam. Phasellus at vehicula lacus, et venenatis sapien. Suspendisse molestie ultrices cursus. Duis dignissim orci non tempus luctus.\0",
//    "0\0\0",
//];
//
//function sleep(delay) {
//    var start = new Date().getTime();
//    while (new Date().getTime() < start + delay);
//}
// === End Server Mock === //

var loadingContent = false;
var lastResponseId = -1;

// TODO: Update from mock data to making server request
function InitialContentRequest()
{
    var responseStr;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            // Typical action to be performed when the document is ready:
            responseStr = xhttp.responseText;
            GetLastIdInContent(responseStr);
            AddNewContent(responseStr);
        }
        loadingContent = false;
    };
    xhttp.open("GET", "http://szy.wtf:8090/request/init", true);
    xhttp.send();
}

// TODO: Update from mock data to making server request
function NextContentRequest(lastReceivedId)
{
    var responseStr;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            // Typical action to be performed when the document is ready:
            responseStr = xhttp.responseText;
            GetLastIdInContent(responseStr);
            AddNewContent(responseStr);
        }
        loadingContent = false;
    };
    xhttp.open("GET", "http://szy.wtf:8090/request/next/" + lastReceivedId, true);
    xhttp.send();
}

function GetLastIdInContent(content)
{
    var splitArray = content.split("\0");
    for (var idIterator = 0; idIterator < splitArray.length; idIterator += 4)
    {
        var postId = splitArray[idIterator];

        if (postId.length > 0 && !isNaN(postId))
        {
            lastResponseId = parseInt(postId);
        }
    }
}

function RequestNewContent()
{
    // No more content
    if (loadingContent || lastResponseId == 0) return;

    //var content;
    loadingContent = true;
    if (lastResponseId == -1) // Initial content request
    {
        InitialContentRequest();
    }
    else // Next content request
    {
        NextContentRequest(lastResponseId);
    }

    //GetLastIdInContent(content);

    //loadingContent = false;
    //return content;
}

function AllContentLoaded()
{
    return lastResponseId == 0;
}
