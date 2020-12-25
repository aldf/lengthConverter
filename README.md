# lengthConverter
JavaScript length Converter

## Using

### JavaScript
```
// add inputs class name
docReady(function() {
  new lengthConverter("lengthConverter");
});
```
### HTML
check [example](https://aldf.github.io/lengthConverter/example.html)
```
<form id="lengths">
  <input type="text" data-type="inches" name="from" class="lengthConverter" />
  <input type="text" data-type="feet" name="from" class="lengthConverter" />
  <input type="number" data-type="meters" name="from" class="lengthConverter" />
</form>
```

### Groups
Using group of convertors in same form element, 
every group should use same name.
```
<form id="lengths">
Group 1 <br>
  <input type="text" data-type="inches" name="from" class="lengthConverter" />
  <input type="text" data-type="feet" name="from" class="lengthConverter" />
  <input type="number" data-type="meters" name="from" class="lengthConverter" />
Group 2 <br>
  <input type="text" data-type="inches" data-format="0" name="to" class="lengthConverter" />
  <input type="text" data-type="feet" name="to" class="lengthConverter" />
  <input type="number" data-type="meters" name="to" class="lengthConverter" />
</form>
```

### Types
used in data-type="?"
- inches
- meters 
- feet
- cm
- yards 
- kilometers
- miles

### Formatter
formatter is auto enabled on global level, you can disable it by passing false
```
new lengthConverter("lengthConverter", false);
```
also can disable formatter on element level by using data-format="0"
```
<input type="text" data-type="inches" data-format="0" name="to" class="lengthConverter" />
```

### Notes
- Use after the document loaded
- All inputs should use same name as group
- In every input should use data-type="?" {inches,meters,feet,cm,yards,kilometers,miles}
- Inputs should be inside the a from element
