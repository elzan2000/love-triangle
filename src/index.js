/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var sum = 0;
  for (var i = 0; i < preferences.length; i++) {
    for (var j = 0; j < preferences.length; j++) {
	    for (var n = 0; n < preferences.length; n++) {
	      if (preferences[i] == j+1 && preferences[j] == n+1 && preferences[n] == i+1) {
		      sum++;  
			  }
      }
    }
  }
  return ~~(sum/3);
};
