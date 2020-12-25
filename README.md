# lengthConverter
JavaScript length Converter

## Using

### JavaScript
```
// add inputs class name
new lengthConverter("lengthConverter");
```
### HTML
check exapmle.html
```
<form id="lengths">
  <input type="text" data-type="inches" name="from" class="lengthConverter" />
  <input type="text" data-type="feet" name="from" class="lengthConverter" />
  <input type="number" data-type="meters" name="from" class="lengthConverter" />
</form>
```
Using group of cenverters in same form
every group should use same name
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
. lengthConverter  is the class name of the inputs
. All inputs should use same name as group
. In every input should use data-type="?" {inches,meters,feet,cm,yards,kilometers,miles}
. Inputs should be insdie the a from element
