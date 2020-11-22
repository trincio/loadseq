# loadseq
It loads javascripts in sequence - promisesless


# Reason for this rough script
1. Need to load javascripts in sequence 
2. Need to assure a certain level of backward compatibility (calback:ok - promises: not ok)

# Where to use it
In small projects where you need to quickly load your js libraries in sequence

# Typical case
When you have several core libraries like Jquery, jquery UI and other ones that have dependences that make critical the order which they're loaded (this is just a rough function, NOT a tool for solving [mutual interdipendence](https://en.wikipedia.org/wiki/Circular_dependency) )

# How to use it
Basically loading it as first javascript.
Then calling the loadseq function passing an array of javascript paths.

```html
<script src="./js/loadseq.js"></script>

<script> 
loadseq(["./js/script=1=.js",   "./js/script=...=.js",   "./js/script=n-1=.js",   "./js/script=n=.js"]);
</script>
``` 

# How does it work
loadseq calls itself with recursive callbacks. It (should) guarantee sequential operations (loadings).