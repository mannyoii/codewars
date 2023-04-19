String.prototype.toJadenCase = function () {
    const words = this.split(" ");
    const newWords =  words.map(x => x[0].toUpperCase() + x.substring(1, this.length));
    const jadenStyle = newWords.join(" ");
    return jadenStyle;
  };