const STATIC = false
if (STATIC) {
  console.log("Remove me in production!")
}

before()
if ("node" === "web") {
  console.log("Remove this because being statically false!")
}
after()
