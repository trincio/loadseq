# loadseq
Load javascripts in sequence - promisesless


# Reason for this rough script
1. Load javascripts in sequence 
2. Avoid a certain level of backward compatibility (calback:ok - promises: not ok)

# Where to use it
In small projects where you need to quickly load your js libraries in sequence

# How to use it
Basically loading it as first javascript.
Then calling the loadseq function passing an array of javascript paths.

```html
<script src="./js/loadseq.js"></script>

<script> 
loadseq(["./js/script=1=.js",   "./js/script=...=.js",   "./js/script=n-1=.js",   "./js/script=n=.js"]);
</script>
```html

# How does it work
loadseq calls itself with recursive callbacks. It (should) guarantee sequential operations (loadings).