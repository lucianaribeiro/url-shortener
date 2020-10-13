/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable prefer-const */
module.exports = {

  rank(data) {
    if (data.length <= 0) {
      console.log("VAZIO");
    } else {
      let ranked = data.sort((a, b) => b.count - a.count);
      return ranked;
    }
  },

  selectFive(data) {
    let newData = this.rank(data);
    let size = 5;
    let selected = newData.slice(0, size).map(i => i);

    return selected;
  },
};
