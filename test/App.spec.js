import requestApi from '../src/api.js'


describe ('llamado Api',()=>{
    it('hace el llamado a la Api', ()=>{
    global.fetch= jest.fn(()=>Promise.resolve({ok:"true",json:()=>Promise.resolve({results:[]})})) //salida    ()=>retorno implicito
    requestApi()
        .then(result=>{
        console.log(result)
        expect(result.length).toBe(0)
        expect(result.length).not.toBe(12)
    })
    })
})