import Vue from 'vue'
import Vuex from 'vuex'
var firebase = require("firebase/app");
import router from './router'
import db from './main'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario: '',
    error: '',
    publicaciones: [],
    publicacione: {id:'', autor:'',titulo:'',ano:'',vol:'',categoria:'',doi:'',link:'',isbn:'',revista:'',estado:'',impact:'',paginas:''},
    docencias: [],
    docencia: {id:'', codigo:'',nombre:'', docente:'', rexe:'', horas:'', unidad:''},
    seminarios: [],
    seminario: {id:'', tema:'', expositor:'', procedencia:'', fecha:'', anoS: ''},
    invitados: [],
    invitado: {id:'',nombre:'',institucion:'',llegada:'',salida:'',ano:''},
    carga: false,
    texto: ''
  },
  mutations: {
    setUsuario(state,payload){
      state.usuario = payload
    },
    setError(state, payload){
      state.error = payload
    },
    setDocencias(state, docencias){
      state.docencias = docencias
    },
    setDocencia(state, docencia){
      state.docencia = docencia
    },
    eliminarDocencia(state, id){
      state.docencias = state.docencias.filter( doc => {
        return doc.id != id
      })
    },
    setPublicaciones(state, publicaciones){
      state.publicaciones = publicaciones
    },
    setPublicacione(state, publicacione){
      state.publicacione = publicacione
    },
    eliminarPublicaciones(state, id){
      state.publicaciones = state.publicaciones.filter( doc => {
        return doc.id != id
      })
    },
    setSeminarios(state, seminarios){
      state.seminarios = seminarios
    },
    setSeminario(state, seminario){
      state.seminario = seminario
    },
    eliminarSeminarios(state, id){
      state.seminarios = state.seminarios.filter( doc => {
        return doc.id != id
      })
    },
    setInvitados(state, invitados){
      state.invitados = invitados
    },
    setInvitado(state, invitado){
      state.invitado = invitado
    },
    eliminarInvitados(state, id){
      state.invitados = state.invitados.filter( doc => {
        return doc.id != id
      })
    },
    cargarFirebase(state, payload){
      state.carga = payload
    }
  },
  actions: {
    buscador({commit, state}, payload){
      console.log(payload);
      state.texto = payload.toLowerCase();
    },
    crearUsuario({commit}, payload){
      firebase.auth().createUserWithEmailAndPassword(payload.email,payload.pass)
        .then(res=>{
          console.log(res.user.email);
          console.log(res.user.uid);
          commit('setUsuario',{email:res.user.email, uid: res.user.uid})
        })
        .catch(err=>{
          console.log(err.message);
          commit('setError', err.code)
        })
    },
    ingresoUsuario({commit}, payload){
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.pass)
        .then(res=>{
          console.log(res);
          commit('setUsuario',{email:res.user.email, uid: res.user.uid})
          router.push({name: 'inicio'})
        })
        .catch(err=>{
          console.log(err);
          commit('setError', err.code)
        })
    },
    detectarUsuario({commit}, payload){
      if(payload != null){
        commit('setUsuario',{email:payload.email, uid:payload.uid})
      }else{
        commit('setUsuario',null)
      }
    },
    cerrarSesion({commit}){
      firebase.auth().signOut()
      commit('setUsuario', null)
      router.push({name: 'ingreso'})
    },
    getPublicaciones({commit}){
      commit('cargarFirebase', true);
      const publicaciones = []
      db.collection('papers').orderBy("ano", "desc").get()
      .then(snapshot => {
        snapshot.forEach( doc => {
          let publicacione = doc.data();
          publicacione.id = doc.id
          publicaciones.push(publicacione)
        })
        setTimeout(()=>{
          commit('cargarFirebase', false);
        }, 2000);
      })
      commit('setPublicaciones', publicaciones)
    },
    getPublicacione({commit}, id){
      db.collection('papers').doc(id).get()
      .then(doc =>{
          let publicacione = doc.data();
          publicacione.id = doc.id
          commit('setPublicacione', publicacione)
      })
    },
    /*
    getPubid({commit}){
      db.collection('papers').doc($this.route.params.id).get()
      //db.collection('papers').doc(publicacione.id).get()
      .then(doc =>{
          if (!docSnapshot.exists) return;
          let publicacione = doc.data();
          publicacione.id = doc.id
          commit('setPublicacione', publicacione)
      })
    },
    */
    getDocencias({commit}){
      commit('cargarFirebase', true);
      const docencias = []
      db.collection('docencia').orderBy("codigo", "asc").get()
      .then(snapshot => {
        snapshot.forEach( doc => {
          let docencia = doc.data();
          docencia.id = doc.id
          docencias.push(docencia)
        })
        setTimeout(()=>{
          commit('cargarFirebase', false);
        }, 2000);
      })
      commit('setDocencias', docencias)
    },
    getDocencia({commit}, id){
      db.collection('docencia').doc(id).get()
      .then(doc =>{
          let docencia = doc.data();
          docencia.id = doc.id
          commit('setDocencia', docencia)
      })
    },
    getSeminarios({commit}){
      commit('cargarFirebase', true);
      const seminarios = []
      db.collection('seminario').orderBy("fecha", "desc").get()
      .then(snapshot => {
        snapshot.forEach( doc => {
          let seminario = doc.data();
          seminario.id = doc.id
          seminarios.push(seminario)
        })
        setTimeout(()=>{
          commit('cargarFirebase', false);
        }, 2000);
      })
      commit('setSeminarios', seminarios)
    },
    getSeminario({commit}, id){
      db.collection('seminario').doc(id).get()
      .then(doc =>{
          let seminario = doc.data();
          seminario.id = doc.id
          commit('setSeminario', seminario)
      })
    },
    getInvitados({commit}){
      commit('cargarFirebase', true);
      const invitados = []
      db.collection('invitado').orderBy("ano", "desc").get()
      .then(snapshot => {
        snapshot.forEach( doc => {
          let invitado = doc.data();
          invitado.id = doc.id
          invitados.push(invitado)
        })
        setTimeout(()=>{
          commit('cargarFirebase', false);
        }, 2000);
      })
      commit('setInvitados', invitados)
    },
    getInvitado({commit}, id){
      db.collection('invitado').doc(id).get()
      .then(doc =>{
          let invitado = doc.data();
          invitado.id = doc.id
          commit('setInvitado', invitado)
      })
    },
    editarPublicaciones({commit}, publicacione){
      db.collection('papers').doc(publicacione.id).update({
        autor: publicacione.autor,
        titulo: publicacione.titulo,
        ano: publicacione.ano,
        vol: publicacione.vol,
        categoria: publicacione.categoria,
        corresponding: publicacione.corresponding,
        doi: publicacione.doi,
        link: publicacione.link,
        isbn: publicacione.isbn,
        revista: publicacione.revista,
        estado: publicacione.estado,
        impact: publicacione.impact,
        paginas: publicacione.paginas
      })
      .then(()=>{
        router.push({name: 'publicaciones'})
      })
    },
    editarDocencia({commit}, docencia){
      db.collection('docencia').doc(docencia.id).update({
        nombre: docencia.nombre,
        codigo: docencia.codigo,
        docente: docencia.docente,
        rexe: docencia.rexe,
        horas: docencia.horas,
        unidad: docencia.unidad
      })
      .then(()=>{
        router.push({name: 'docencia'})
      })
    },/**/
    editarSeminarios({commit}, seminario){
      db.collection('seminario').doc(seminario.id).update({
        tema: seminario.tema,
        expositor: seminario.expositor,
        fecha: seminario.fecha,
        procedencia: seminario.procedencia,
        ano: seminario.ano
      })
      .then(()=>{
        router.push({name: 'seminarios'})
      })
    },
    editarInvitados({commit}, invitado){
      db.collection('invitado').doc(invitado.id).update({
        nombre: invitado.nombre,
        institucion: invitado.institucion,
        llegada: invitado.llegada,
        salida: invitado.salida,
        ano: invitado.ano
      })
      .then(()=>{
        router.push({name: 'invitados'})
      })
    },
    agregarPublicaciones({commit}, {autor,titulo,revista,ano,vol,paginas,categoria,corresponding,estado,isbn,impact,doi,link}){
      commit('cargarFirebase', true);
      const usuario = firebase.auth().currentUser
      db.collection('papers').add({
        autor: autor, 
        titulo: titulo, 
        revista: revista,
        ano: ano, 
        vol: vol,
        paginas: paginas,
        categoria:categoria, 
        corresponding: corresponding,
        estado: estado,
        isbn: isbn,
        impact: impact,
        doi: doi,
        link: link
      })
      .then(doc =>{
        console.log(doc.id);
        console.log("Pub AGREGADA");
        router.push({name: 'publicaciones'})
        commit('cargarFirebase', false);
      })
    },
    agregarDocencia({commit}, {nombre, codigo, docente, rexe, horas, unidad}){
      commit('cargarFirebase', true);
      const usuario = firebase.auth().currentUser
      db.collection('docencia').add({
        nombre: nombre,
        codigo: codigo,
        docente: docente,
        rexe: rexe,
        horas: horas,
        unidad: unidad
      })
      .then(doc =>{
        console.log(doc.id);
        console.log("Doc AGREGADA");
        router.push({name: 'docencia'})
        commit('cargarFirebase', false);
      })
    },
    agregarSeminario({commit}, {expositor, procedencia, tema, ano, fecha}){
      commit('cargarFirebase', true);
      db.collection('seminario').add({
        expositor: expositor,
        procedencia: procedencia,
        tema: tema,
        ano: ano,
        fecha: fecha
      })
      .then(doc =>{
        console.log(doc.id);
        console.log("Doc AGREGADA");
        router.push({name: 'seminarios'})
        commit('cargarFirebase', false);
      })
    },
    agregarInvitado({commit}, {nombre, institucion, llegada, salida, ano}){
      commit('cargarFirebase', true);
      db.collection('invitado').add({
        nombre: nombre,
        institucion: institucion,
        llegada: llegada,
        salida: salida,
        ano: ano
      })
      .then(doc =>{
        console.log(doc.id);
        console.log("Invitado AGREGADO");
        router.push({name: 'invitados'})
        commit('cargarFirebase', false);
      })
    },
    eliminarPublicaciones({commit, dispatch}, id){
      db.collection('papers').doc(id).delete()
      .then(()=>{
        console.log('Paper eliminado');
        //dispatch('getTareas')
        commit('eliminarPublicaciones', id)
      })
    },
    eliminarSeminarios({commit, dispatch}, id){
      db.collection('seminario').doc(id).delete()
      .then(()=>{
        console.log('Seminario eliminado');
        //dispatch('getTareas')
        commit('eliminarSeminarios', id)
      })
    },
    eliminarDocencia({commit, dispatch}, id){
      db.collection('docencia').doc(id).delete()
      .then(()=>{
        console.log('Docencia eliminada');
        //dispatch('getTareas')
        commit('eliminarDocencia', id)
      })
    },
    eliminarInvitados({commit, dispatch}, id){
      db.collection('invitado').doc(id).delete()
      .then(()=>{
        console.log('Invitado eliminado');
        //dispatch('getTareas')
        commit('eliminarInvitados', id)
      })
    }
  },
  getters:{
    existeUsuario(state){
      if(state.usuario === null || state.usuario === '' || state.usuario === undefined){
        return false
      }else{
        return true
      }
    },
    arrayFiltrado(state){
      let arregloFiltrado = []
      for(let docencia of state.docencias){
        let nombre = docencia.nombre.toLowerCase();
        if(nombre.indexOf(state.texto) >= 0){
          arregloFiltrado.push(docencia);
        }
      }
      return arregloFiltrado;
    },
    arrayFiltrado2(state){
      let arregloFiltrado2 = []
      for(let publicacione of state.publicaciones){
        let autor = publicacione.autor.toLowerCase();
        let titulo = publicacione.titulo.toLowerCase();
        if(autor.indexOf(state.texto) >= 0 || titulo.indexOf(state.texto) >= 0){
          arregloFiltrado2.push(publicacione);
        }
      }
      return arregloFiltrado2;
    },
    arrayFiltrado3(state){
      let arrayFiltrado3 = []
      for(let seminario of state.seminarios){
        let expositor = seminario.expositor.toLowerCase();
        if(expositor.indexOf(state.texto) >= 0){
          arrayFiltrado3.push(seminario);
        }
      }
      return arrayFiltrado3;
    },
    arrayFiltrado4(state){
      let arrayFiltrado4 = []
      for(let invitado of state.invitados){
        let nombre = invitado.nombre.toLowerCase();
        if(nombre.indexOf(state.texto) >= 0){
          arrayFiltrado4.push(invitado);
        }
      }
      return arrayFiltrado4;
    },
    especifico(state){
      let especifico = []
      for(let publicacione of state.publicaciones){
        let autor = publicacione.autor.toLowerCase();
        let titulo = publicacione.titulo.toLowerCase();
        let revista = publicacione.revista.toLowerCase();
        let estado = publicacione.estado.toLowerCase();
        let paginas = publicacione.paginas.toLowerCase();
        let vol = publicacione.vol.toLowerCase();
        let doi = publicacione.doi.toLowerCase();
        let isbn = publicacione.isbn.toLowerCase();
        let link = publicacione.link.toLowerCase();
        let impact = publicacione.impact.toLowerCase();
        let categoria = publicacione.categoria.toLowerCase();
        let ano = publicacione.ano.toLowerCase();
        if(autor.indexOf(state.texto) >= 0 
        || titulo.indexOf(state.texto) >= 0
        || revista.indexOf(state.texto) >= 0 
        || estado.indexOf(state.texto) >= 0
        || paginas.indexOf(state.texto) >= 0 
        || vol.indexOf(state.texto) >= 0
        || doi.indexOf(state.texto) >= 0 
        || isbn.indexOf(state.texto) >= 0
        || link.indexOf(state.texto) >= 0 
        || link.indexOf(state.texto) >= 0
        || impact.indexOf(state.texto) >= 0 
        || categoria.indexOf(state.texto) >= 0
        || ano.indexOf(state.texto) >= 0){
          especifico.push(publicacione);
        }
      }
      return especifico;
    }
  }
})
