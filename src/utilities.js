export const Utilities = {
  random: function(from, to) {
    return from + Math.floor(Math.random() * (to - from));
  },

  shuffle: function(arr) {
    return arr.sort(() => Math.random() - 0.5);
  },
};
