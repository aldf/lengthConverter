lengthConverter = function (className, groups) {
  x = {
    from: 0.0,
    type: "",
    meters: { value: 0.0, type: "meters" },
    feet: { value: 0.0, type: "feet" },
    inches: { value: 0.0, type: "inches" },
    cm: { value: 0.0, type: "cm" },
    yards: { value: 0.0, type: "yards" },
    kilometers: { value: 0.0, type: "kilometers" },
    miles: { value: 0.0, type: "miles" },
    format: function (to, value) {
      if (to.type == "feet") {
        var feet = value.toString().split(".");
        console.log(feet);
        if (feet.length > 1)
          return feet[0] + "' " + Math.round(0.1 * feet[1] * 12) / 100 + '"';
        else return feet[0] + "' " + '0"';
      }
      if (to.type == "inches") {
        var inches = value.toString().split(".");
        if (inches[0].indexOf('"') == -1) return parseFloat(inches[0]) + '"';
        else return parseFloat(inches[0]);
      }
      return Math.round(value);
    },
    unFormat: function (t) {
      var from = t.from;
      if (t.type == "feet") {
        var feet = t.from.split(" ");
        var inch = 0;
        //inch = Math.round((parseFloat(feet[1].replace('"', ''))/12)) * 100;
        if (feet.length > 1)
          inch = Math.round((parseInt(feet[1].replace('"', "")) * 100) / 1.2);
        else inch = 0;
        console.log(inch);
        feet = parseInt(feet[0].replace("'", ""));
        console.log(feet);
        from = feet + "." + inch;
        console.log(from);
      } else if (t.type == "inches") {
        from = t.from.replace('"', "");
      }

      return (t.from = from);
    },
    convert: function () {
      if (this.type == "feet") {
        this.feet.value = this.format(this.feet, this.unFormat(this));
        this.meters.value = this.format(
          this.meters,
          (this.from / 3.2808).toFixed(2)
        );
        this.inches.value = this.format(
          this.inches,
          (this.from * 12).toFixed(2)
        );
        this.cm.value = this.format(this.cm, (this.from / 0.032808).toFixed());
        this.yards.value = this.format(
          this.yards,
          (this.from * 0.33333).toFixed(2)
        );
        this.kilometers.value = this.format(
          this.kilometers,
          (this.from / 3280.8).toFixed(5)
        );
        this.miles.value = this.format(
          this.miles,
          (this.from * 0.00018939).toFixed(5)
        );
      }
      if (this.type == "meters") {
        this.meters.value = this.format(this.meters, this.unFormat(this));
        this.feet.value = this.format(
          this.feet,
          (this.from * 3.2808).toFixed(2)
        );
        this.inches.value = this.format(
          this.inches,
          (this.from * 39.37).toFixed(2)
        );
        this.cm.value = this.format(this.cm, (this.from / 0.01).toFixed());
        this.yards.value = this.format(
          this.yards,
          (this.from * 1.0936).toFixed(2)
        );
        this.kilometers.value = this.format(
          this.kilometers,
          (this.from / 1000).toFixed(5)
        );
        this.miles.value = this.format(
          this.miles,
          (this.from * 0.00062137).toFixed(5)
        );
      }
      if (this.type == "inches") {
        this.inches.value = this.format(this.inches, this.unFormat(this));
        this.feet.value = this.format(
          this.feet,
          (this.from * 0.083333).toFixed(3)
        );
        this.meters.value = this.format(
          this.meters,
          (this.from / 39.37).toFixed(3)
        );
        this.cm.value = this.format(this.cm, (this.from / 0.3937).toFixed(2));
        this.yards.value = this.format(
          this.yards,
          (this.from * 0.027778).toFixed(3)
        );
        this.kilometers.value = this.format(
          this.kilometers,
          (this.from / 39370).toFixed(6)
        );
        this.miles.value = this.format(
          this.miles,
          (this.from * 0.000015783).toFixed(6)
        );
      }
      if (this.type == "cm") {
        this.cm.value = this.format(this.cm, this.unFormat(this));
        this.feet.value = this.format(
          this.feet,
          (this.from * 0.032808).toFixed(3)
        );
        this.meters.value = this.format(
          this.meters,
          (this.from / 100).toFixed(3)
        );
        this.inches.value = this.format(
          this.inches,
          (this.from * 0.3937).toFixed(2)
        );
        this.yards.value = this.format(
          this.yards,
          (this.from * 0.010936).toFixed(3)
        );
        this.kilometers.value = this.format(
          this.kilometers,
          (this.from / 100000).toFixed(6)
        );
        this.miles.value = this.format(
          this.miles,
          (this.from * 0.0000062137).toFixed(6)
        );
      }
      if (this.type == "yards") {
        this.yards.value = this.format(this.yards, this.unFormat(this));
        this.feet.value = this.format(this.feet, (this.from * 3).toFixed());
        this.meters.value = this.format(
          this.meters,
          (this.from / 1.0936).toFixed(2)
        );
        this.inches.value = this.format(
          this.inches,
          (this.from * 36).toFixed()
        );
        this.cm.value = this.format(this.cm, (this.from / 0.010936).toFixed());
        this.kilometers.value = this.format(
          this.kilometers,
          (this.from / 1093.6).toFixed(5)
        );
        this.miles.value = this.format(
          this.miles,
          (this.from * 0.00056818).toFixed(5)
        );
      }
      if (this.type == "kilometers") {
        this.kilometers.value = this.format(
          this.kilometers,
          this.unFormat(this)
        );
        this.feet.value = this.format(
          this.feet,
          (this.from * 3280.8).toFixed()
        );
        this.meters.value = this.format(
          this.meters,
          (this.from * 1000).toFixed()
        );
        this.inches.value = this.format(
          this.inches,
          (this.from * 39370).toFixed()
        );
        this.cm.value = this.format(this.cm, (this.from * 100000).toFixed());
        this.yards.value = this.format(
          this.yards,
          (this.from * 1093.6).toFixed()
        );
        this.miles.value = this.format(
          this.miles,
          (this.from * 0.62137).toFixed(2)
        );
      }
      if (this.type == "miles") {
        this.miles.value = this.format(this.miles, this.unFormat(this));
        this.feet.value = this.format(this.feet, (this.from * 5280).toFixed());
        this.meters.value = this.format(
          this.meters,
          (this.from / 0.00062137).toFixed()
        );
        this.inches.value = this.format(
          this.inches,
          (this.from * 63360).toFixed()
        );
        this.cm.value = this.format(
          this.cm,
          (this.from / 0.0000062137).toFixed()
        );
        this.yards.value = this.format(
          this.yards,
          (this.from * 1760).toFixed()
        );
        this.kilometers.value = this.format(
          this.kilometers,
          (this.from / 0.62137).toFixed(2)
        );
      }
    },
  };

  lc = document.getElementsByClassName(className);
  var i;
  var stopLisner = false;
  for (i = 0; i < lc.length; i++) {
    addListenerMulti(lc[i], "focus click", function () {
      if (this.value.indexOf('"') != -1) {
        var sel = this.value.indexOf("'");
        if (sel == -1) sel = this.value.indexOf('"');
        if (sel == -1) sel = 1;
        if (this.selectionEnd > sel + 1)
          this.setSelectionRange(sel + 2, this.value.length - 1);
        else this.setSelectionRange(0, sel);
      }
    });
    lc[i].addEventListener("input", function () {
      if (!stopLisner) {
        let form = this.closest("form").id;
        if (form == "" || form == null) {
          form = this.closest("form").id = className + "-form";
        }
        let selector = "#" + form + ' input[name="' + this.name + '"]';
        x.from =
          this.value != "" && this.value != '"' && this.value.indexOf("'") != 0
            ? this.value
            : 0;
        x.type = this.getAttribute("data-type");
        x.convert();
        group = document.querySelectorAll(selector);
        var j;
        stopLisner = true;
        for (j = 0; j < group.length; j++) {
          group[j].value = x[group[j].getAttribute("data-type")].value;
        }
        stopLisner = false;
      }
      type = this.getAttribute("data-type");
      if (type == "inches" || type == "feet") {
        if (this.value == '0"') this.select(0, 1);
        else {
          if (this.selectionEnd <= this.value.indexOf("'") + 1)
            this.setSelectionRange(
              this.value.indexOf("'"),
              this.value.indexOf("'")
            );
          else
            this.setSelectionRange(
              this.value.length - 1,
              this.value.length - 1
            );
        }
      }
    });
  }
};
function addListenerMulti(el, s, fn) {
  s.split(" ").forEach((e) => el.addEventListener(e, fn, false));
}
function docReady(fn) {
  if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
  ) {
    setTimeout(fn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}
