import { useEffect } from 'react'
import grapesjs from 'grapesjs'
import 'grapesjs/dist/css/grapes.min.css'
import 'grapesjs/dist/grapes.min.js'

function DdBuilder() {
  useEffect(() => {
    //EDITOR INITIALISATION
    const editor = grapesjs.init({
      container: '#gjs',
      height: '700px',
      width: '100%',
      panels: {
        id: 'basic-actions',
        el: '.panel__basic-actions',
        buttons: [
          {
            id: 'alert-button',
            className: 'btn-alert-button',
            label: 'Click my butt(on)',
            command() {
              alert('Hello World')
            },
          },
        ],
      },
      storageManager: {
        id: 'gjs-',
        type: 'local',
        autosave: true,
        storeComponents: true,
        storeStyles: true,
        storeHtml: true,
        storeCss: true,
      },
      //RESPONSIVE DEVICE MANAGER
      deviceManager: {
        devices: [
          {
            id: 'desktop',
            name: 'Desktop',
            width: '',
          },
          {
            id: 'tablet',
            name: 'Tablet',
            width: '768px',
            widthMedia: '992px',
          },
          {
            id: 'mobilePortrait',
            name: 'Mobile portrait',
            width: '320px',
            widthMedia: '575px',
          },
        ],
      },
      //BLOCKS THAT CAN BE DRAGGED & DROPPED INTO THE CANVAS
      blockManager: {
        blocks: [
          {
            id: 'text',
            label: 'Text',
            content: '<div data-gjs-type="text">Insert your text here</div>',
          },
          {
            id: 'image',
            label: 'Image',
            select: true,
            content: { type: 'image' },
            activate: true,
          },
          {
            id: 'dropdown',
            label: 'Dropdown',
            content: `<select name="cars" id="cars">
                        <option value="opt1">Option 1</option>
                        <option value="opt2">Option 2</option>
                        <option value="opt3">Option 3</option>
                        <option value="opt4">Option 4</option>
                    </select>`,
          },
          {
            id: 'checkbox',
            label: 'Checkbox',
            content: `<input type="checkbox" id="opt1" name="option1" value="Option1">
                      <label for="option1"> Option 1 </label><br>
                      <input type="checkbox" id="opt2" name="option2" value="Option2">
                      <label for="option2"> Option 2 </label><br>
                      <input type="checkbox" id="opt3" name="option3" value="Option3">
                      <label for="option3"> Option 3 </label><br>`,
          },
        ],
      },
    })
  }, [])
  return <div id="gjs"></div>
}
export default DdBuilder
