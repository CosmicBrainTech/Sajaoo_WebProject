/*!
 * 
 * Super simple wysiwyg editor v0.8.15
 * https://summernote.org
 * 
 * 
 * Copyright 2013- Alan Hong. and other contributors
 * summernote may be freely distributed under the MIT license.
 * 
 * Date: 2020-01-04T11:44Z
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ({

/***/ 14:
/***/ (function(module, exports) {

(function ($) {
  $.extend($.summernote.lang, {
    'es-ES': {
      font: {
        bold: 'Negrita',
        italic: 'Cursiva',
        underline: 'Subrayado',
        clear: 'Quitar estilo de fuente',
        height: 'Altura de l??nea',
        name: 'Fuente',
        strikethrough: 'Tachado',
        superscript: 'Super??ndice',
        subscript: 'Sub??ndice',
        size: 'Tama??o de la fuente'
      },
      image: {
        image: 'Imagen',
        insert: 'Insertar imagen',
        resizeFull: 'Redimensionar a tama??o completo',
        resizeHalf: 'Redimensionar a la mitad',
        resizeQuarter: 'Redimensionar a un cuarto',
        floatLeft: 'Flotar a la izquierda',
        floatRight: 'Flotar a la derecha',
        floatNone: 'No flotar',
        shapeRounded: 'Forma: Redondeado',
        shapeCircle: 'Forma: C??rculo',
        shapeThumbnail: 'Forma: Marco',
        shapeNone: 'Forma: Ninguna',
        dragImageHere: 'Arrastrar una imagen o texto aqu??',
        dropImage: 'Suelta la imagen o texto',
        selectFromFiles: 'Seleccionar desde los archivos',
        maximumFileSize: 'Tama??o m??ximo del archivo',
        maximumFileSizeError: 'Has superado el tama??o m??ximo del archivo.',
        url: 'URL de la imagen',
        remove: 'Eliminar imagen',
        original: 'Original'
      },
      video: {
        video: 'V??deo',
        videoLink: 'Link del v??deo',
        insert: 'Insertar v??deo',
        url: '??URL del v??deo?',
        providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion o Youku)'
      },
      link: {
        link: 'Link',
        insert: 'Insertar link',
        unlink: 'Quitar link',
        edit: 'Editar',
        textToDisplay: 'Texto para mostrar',
        url: '??Hacia que URL lleva el link?',
        openInNewWindow: 'Abrir en una nueva ventana'
      },
      table: {
        table: 'Tabla',
        addRowAbove: 'A??adir fila encima',
        addRowBelow: 'A??adir fila debajo',
        addColLeft: 'A??adir columna izquierda',
        addColRight: 'A??adir columna derecha',
        delRow: 'Borrar fila',
        delCol: 'Eliminar columna',
        delTable: 'Eliminar tabla'
      },
      hr: {
        insert: 'Insertar l??nea horizontal'
      },
      style: {
        style: 'Estilo',
        p: 'p',
        blockquote: 'Cita',
        pre: 'C??digo',
        h1: 'T??tulo 1',
        h2: 'T??tulo 2',
        h3: 'T??tulo 3',
        h4: 'T??tulo 4',
        h5: 'T??tulo 5',
        h6: 'T??tulo 6'
      },
      lists: {
        unordered: 'Lista desordenada',
        ordered: 'Lista ordenada'
      },
      options: {
        help: 'Ayuda',
        fullscreen: 'Pantalla completa',
        codeview: 'Ver c??digo fuente'
      },
      paragraph: {
        paragraph: 'P??rrafo',
        outdent: 'Menos tabulaci??n',
        indent: 'M??s tabulaci??n',
        left: 'Alinear a la izquierda',
        center: 'Alinear al centro',
        right: 'Alinear a la derecha',
        justify: 'Justificar'
      },
      color: {
        recent: '??ltimo color',
        more: 'M??s colores',
        background: 'Color de fondo',
        foreground: 'Color de fuente',
        transparent: 'Transparente',
        setTransparent: 'Establecer transparente',
        reset: 'Restaurar',
        resetToDefault: 'Restaurar por defecto'
      },
      shortcut: {
        shortcuts: 'Atajos de teclado',
        close: 'Cerrar',
        textFormatting: 'Formato de texto',
        action: 'Acci??n',
        paragraphFormatting: 'Formato de p??rrafo',
        documentStyle: 'Estilo de documento',
        extraKeys: 'Teclas adicionales'
      },
      help: {
        'insertParagraph': 'Insertar p??rrafo',
        'undo': 'Deshacer ??ltima acci??n',
        'redo': 'Rehacer ??ltima acci??n',
        'tab': 'Tabular',
        'untab': 'Eliminar tabulaci??n',
        'bold': 'Establecer estilo negrita',
        'italic': 'Establecer estilo cursiva',
        'underline': 'Establecer estilo subrayado',
        'strikethrough': 'Establecer estilo tachado',
        'removeFormat': 'Limpiar estilo',
        'justifyLeft': 'Alinear a la izquierda',
        'justifyCenter': 'Alinear al centro',
        'justifyRight': 'Alinear a la derecha',
        'justifyFull': 'Justificar',
        'insertUnorderedList': 'Insertar lista desordenada',
        'insertOrderedList': 'Insertar lista ordenada',
        'outdent': 'Reducir tabulaci??n del p??rrafo',
        'indent': 'Aumentar tabulaci??n del p??rrafo',
        'formatPara': 'Cambiar estilo del bloque a p??rrafo (etiqueta P)',
        'formatH1': 'Cambiar estilo del bloque a H1',
        'formatH2': 'Cambiar estilo del bloque a H2',
        'formatH3': 'Cambiar estilo del bloque a H3',
        'formatH4': 'Cambiar estilo del bloque a H4',
        'formatH5': 'Cambiar estilo del bloque a H5',
        'formatH6': 'Cambiar estilo del bloque a H6',
        'insertHorizontalRule': 'Insertar l??nea horizontal',
        'linkDialog.show': 'Mostrar panel enlaces'
      },
      history: {
        undo: 'Deshacer',
        redo: 'Rehacer'
      },
      specialChar: {
        specialChar: 'CARACTERES ESPECIALES',
        select: 'Selecciona Caracteres especiales'
      }
    }
  });
})(jQuery);

/***/ })

/******/ });
});