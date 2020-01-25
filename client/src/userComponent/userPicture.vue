<template>

</template>
<template>
            <div class="hello">    
                <PictureInput
                ref="pictureInput" 
                @change="onChange" 
                width="300" 
                height="300" 
                margin="16" 
                accept="image/jpeg,image/png" 
                size="10" 
                buttonClass="btn"
                :customStrings="{
                    upload: '<h1>Bummer!</h1>',
                    drag: 'Drag a picture or click path'
                }">
                </PictureInput>
                <button v-on:click="saveMe">Save picture</button>
            </div>
</template>


<script >
import PictureInput from 'vue-picture-input'
export default {

    components : {
        PictureInput
    },
     methods: {
    onChange (image) {
      console.log('New picture selected!')
      if (image) {
        console.log('Picture loaded.')
        this.image = image
      } else {
        console.log('FileReader API not supported: use the <form>, Luke!')
      }
    },
    saveMe(){
        console.log(this.image)
        saveAs(blob, "hello world.txt")
    }
  }

}

</script>
