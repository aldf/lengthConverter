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
Using group of convertors in same form element, 
every group should use same name.
```
<form id="lengths">
Group 1 <br>
  <input type="text" data-type="inches" name="from" class="lengthConverter" />
  <input type="text" data-type="feet" name="from" class="lengthConverter" />
  <input type="number" data-type="meters" name="from" class="lengthConverter" />
Group 2 <br>
  <input type="text" data-type="inches" name="to" class="lengthConverter" />
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

### Notes
- Use after the document loaded
- All inputs should use same name as group
- In every input should use data-type="?" {inches,meters,feet,cm,yards,kilometers,miles}
- Inputs should be inside the a from element
