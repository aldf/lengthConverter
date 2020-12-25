lengthConverter = function (className, formatter = true) {
  x = {
    from: 0.0,
    type: "",
    formatter: formatter,
    meters: { value: 0.0, type: "meters", formatter: formatter },
    feet: { value: 0.0, type: "feet", formatter: formatter },
    inches: { value: 0.0, type: "inches", formatter: formatter },
    cm: { value: 0.0, type: "cm", formatter: formatter },
    yards: { value: 0.0, type: "yards", formatter: formatter },
    kilometers: { value: 0.0, type: "kilometers", formatter: formatter },
    miles: { value: 0.0, type: "miles", formatter: formatter },
    format: function (to, value,format) {
      if(!format && !this[to.type].formatter)
      return value;
      if (to.type == "feet") {
        var feet = value.toString().split(".");
        if (feet.length > 1)
          return feet[0] + "' " + Math.round(0.1 * feet[1] * 12) / 100 + '"';
        else return feet[0] + "' " + '0"';
      }
      if (to.type == "inches") {
        var inches = value.toString().split(".");
        if (inches[0].indexOf('"') == -1) return parseFloat(inches[0]) + '"';
        else return parseFloat(inches[0]);
      }
      return parseFloat(value);
    },
    unFormat: function (t,format) {
      if(!format && !this[t.type].formatter)
      return t.from;
      var from = t.from;
      if (t.type == "feet") {
        var feet = t.from.split(" ");
        var inch = 0;
        //inch = Math.round((parseFloat(feet[1].replace('"', ''))/12)) * 100;
        if (feet.length > 1)
          inch = Math.round((parseInt(feet[1].replace('"', "")) * 100) / 1.2);
        else inch = 0;
        feet = parseInt(feet[0].replace("'", ""));
        from = feet + "." + inch;
      } else if (t.type == "inches") {
        from = t.from.replace('"', "");
      }

      return (t.from = from);
    },
    convert: function () {
      if (this.type == "feet") {
        this.feet.value = this.format(this.feet, this.unFormat(this,this.feet.formatter),this.feet.formatter);
        this.meters.value = this.format(
          this.meters,
          (this.from / 3.2808).toFixed(2),
          this.meters.formatter
        );
        this.inches.value = this.format(
          this.inches,
          (this.from * 12).toFixed(2),
          this.inches.formatter
        );
        this.cm.value = this.format(this.cm, (this.from / 0.032808).toFixed(),this.cm.formatter);
        this.yards.value = this.format(
          this.yards,
          (this.from * 0.33333).toFixed(2),
          this.yards.formatter
        );
        this.kilometers.value = this.format(
          this.kilometers,
          (this.from / 3280.8).toFixed(5),
          this.kilometers.formatter
        );
        this.miles.value = this.format(
          this.miles,
          (this.from * 0.00018939).toFixed(5),
          this.miles.formatter
        );
      }
      if (this.type == "meters") {
        this.meters.value = this.format(this.meters, this.unFormat(this,this.meters.formatter),this.meters.formatter);
        this.feet.value = this.format(
          this.feet,
          (this.from * 3.2808).toFixed(2),
          this.feet.formatter
        );
        this.inches.value = this.format(
          this.inches,
          (this.from * 39.37).toFixed(2),
          this.inches.formatter
        );
        this.cm.value = this.format(this.cm, (this.from / 0.01).toFixed(),this.cm.formatter);
        this.yards.value = this.format(
          this.yards,
          (this.from * 1.0936).toFixed(2),
          this.yards.formatter
        );
        this.kilometers.value = this.format(
          this.kilometers,
          (this.from / 1000).toFixed(5),
          this.kilometers.formatter
        );
        this.miles.value = this.format(
          this.miles,
          (this.from * 0.00062137).toFixed(5),
          this.miles.formatter
        );
      }
      if (this.type == "inches") {
        this.inches.value = this.format(this.inches, this.unFormat(this,this.inches.formatter),this.inches.formatter);
        this.feet.value = this.format(
          this.feet,
          (this.from * 0.083333).toFixed(3),
          this.feet.formatter
        );
        this.meters.value = this.format(
          this.meters,
          (this.from / 39.37).toFixed(3),
          this.meters.formatter
        );
        this.cm.value = this.format(this.cm, (this.from / 0.3937).toFixed(2),this.cm.formatter);
        this.yards.value = this.format(
          this.yards,
          (this.from * 0.027778).toFixed(3),
          this.yards.formatter
        );
        this.kilometers.value = this.format(
          this.kilometers,
          (this.from / 39370).toFixed(6),
          this.kilometers.formatter
        );
        this.miles.value = this.format(
          this.miles,
          (this.from * 0.000015783).toFixed(6),
          this.miles.formatter
        );
      }
      if (this.type == "cm") {
        this.cm.value = this.format(this.cm, this.unFormat(this,this.cm.formatter),this.cm.formatter);
        this.feet.value = this.format(
          this.feet,
          (this.from * 0.032808).toFixed(3),
          this.feet.formatter
        );
        this.meters.value = this.format(
          this.meters,
          (this.from / 100).toFixed(3),
          this.meters.formatter
        );
        this.inches.value = this.format(
          this.inches,
          (this.from * 0.3937).toFixed(2),
          this.inches.formatter
        );
        this.yards.value = this.format(
          this.yards,
          (this.from * 0.010936).toFixed(3),
          this.yards.formatter
        );
        this.kilometers.value = this.format(
          this.kilometers,
          (this.from / 100000).toFixed(6),
          this.kilometers.formatter
        );
        this.miles.value = this.format(
          this.miles,
          (this.from * 0.0000062137).toFixed(6),
          this.miles.formatter
        );
      }
      if (this.type == "yards") {
        this.yards.value = this.format(this.yards, this.unFormat(this,this.yards.formatter),this.yards.formatter);
        this.feet.value = this.format(this.feet, (this.from * 3).toFixed(),this.feet.formatter);
        this.meters.value = this.format(
          this.meters,
          (this.from / 1.0936).toFixed(2),
          this.meters.formatter
        );
        this.inches.value = this.format(
          this.inches,
          (this.from * 36).toFixed(),
          this.inches.formatter
        );
        this.cm.value = this.format(this.cm, (this.from / 0.010936).toFixed(),this.cm.formatter);
        this.kilometers.value = this.format(
          this.kilometers,
          (this.from / 1093.6).toFixed(5),
          this.kilometers.formatter
        );
        this.miles.value = this.format(
          this.miles,
          (this.from * 0.00056818).toFixed(5),
          this.miles.formatter
        );
      }
      if (this.type == "kilometers") {
        this.kilometers.value = this.format(
          this.kilometers,
          this.unFormat(this,this.kilometers.formatter),
          this.kilometers.formatter
        );
        this.feet.value = this.format(
          this.feet,
          (this.from * 3280.8).toFixed(),
          this.feet.formatter
        );
        this.meters.value = this.format(
          this.meters,
          (this.from * 1000).toFixed(),
          this.meters.formatter
        );
        this.inches.value = this.format(
          this.inches,
          (this.from * 39370).toFixed(),
          this.inches.formatter
        );
        this.cm.value = this.format(this.cm, (this.from * 100000).toFixed(),this.cm.formatter);
        this.yards.value = this.format(
          this.yards,
          (this.from * 1093.6).toFixed(),
          this.yards.formatter
        );
        this.miles.value = this.format(
          this.miles,
          (this.from * 0.62137).toFixed(2),
          this.miles.formatter
        );
      }
      if (this.type == "miles") {
        this.miles.value = this.format(this.miles, this.unFormat(this,this.miles.formatter),this.miles.formatter);
        this.feet.value = this.format(this.feet, (this.from * 5280).toFixed(),this.feet.formatter);
        this.meters.value = this.format(
          this.meters,
          (this.from / 0.00062137).toFixed(),
          this.meters.formatter
        );
        this.inches.value = this.format(
          this.inches,
          (this.from * 63360).toFixed(),
          this.inches.formatter
        );
        this.cm.value = this.format(
          this.cm,
          (this.from / 0.0000062137).toFixed(),
          this.cm.formatter
        );
        this.yards.value = this.format(
          this.yards,
          (this.from * 1760).toFixed(),
          this.yards.formatter
        );
        this.kilometers.value = this.format(
          this.kilometers,
          (this.from / 0.62137).toFixed(2),
          this.kilometers.formatter
        );
      }
    },
  };

  lc = document.getElementsByClassName(className);
  var i;
  var stopListener = false;
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
    lc[i].addEventListener("input", function (e) {
      var formatter = x.formatter;
      if(this.getAttribute("data-format") == '1')
      formatter = true;
      else if(this.getAttribute("data-format") == '0')
      formatter = false;
      var keys = [".", "'", '"',' '];
      if(keys.indexOf(e.data) > -1 ) {
        stopListener=true;
      }
      if (!stopListener) {
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
        x[x.type].formatter = formatter;
        x.convert();
        group = document.querySelectorAll(selector);
        var j;
        stopListener = true;
        for (j = 0; j < group.length; j++) {
          group[j].value = x[group[j].getAttribute("data-type")].value;
        }
        stopListener = false;
      }
      if(keys.indexOf(e.data) > -1 ) {
        stopListener=false;
      }
      type = this.getAttribute("data-type");
      if (formatter && type == "inches" || type == "feet") {
        if (this.value == '0"') this.select(0, 1);
        else {
          if (
            this.selectionEnd > this.value.indexOf("'") &&
            this.value.indexOf("'") != -1
          )
            this.setSelectionRange(
              this.value.indexOf("'") + 2,
              this.value.length - 1
            );
          else if (this.value.indexOf("'") > 0)
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
