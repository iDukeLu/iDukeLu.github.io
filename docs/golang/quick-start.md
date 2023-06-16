---
id: head-metadata
title: Head Metadata
---

```go {10,12,13} showLineNumbers title="/src/components/HelloCodeTitle.js"
package sample

import (
	"errors"
	"fmt"
	"strings"
	"testing"
)

func TestSample(t *testing.T) {
	str := "abcde"
	replacer := strings.NewReplacer("-", "", "_", "")
	newStr := replacer.Replace(str)
	fmt.Println(newStr) // "bbdde"
}
```

![](https://github.com/iDukeLu/image-host/blob/main/kubernetes/cover.jpg?raw=true)
<!-- <img src="https://github.com/iDukeLu/image-host/blob/main/kubernetes/cover.jpg?raw=true"/> -->