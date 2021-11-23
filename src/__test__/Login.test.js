import React from "react";
import Login from "../pages/Login/Login";
import { Switch,Route,Router, BrowserRouter } from "react-router-dom";

import { fireEvent, render,screen } from "@testing-library/react";
import {Provider} from "react-redux";
import ReactDOM from "react-dom";
import Store from "../store";
import userEvent from "@testing-library/user-event";
import { mount } from "enzyme";

import axios from 'axios';
import Home from "../pages/home/Home";
import { findTestAttr, storefactory } from "../testUtils";
import App from "../App";

// import mockAxios from "axios"
jest.mock("axios")


// import moxios from "moxios";
// // import { storefactory } from "../testUtils";
// import Sendlogin from "../redux/actions/action";
// // import { describe } from "yargs";
// const post={username:5252,password:"admin"}

// describe("getsecreteword",()=>{
//     beforeEach(()=>{
//         moxios.install();
//     })
//     afterEach(()=>{
//         moxios.uninstall();
//     })

//     test("secrete word retun",()=>{
//         const store=storefactory()
//         moxios.wait(()=>{
//             const request=moxios.requests.mostRecent();
//             request.respondWith({
//             status:200,
//               response:{ data:{status:true}}
//             });

//         });
//         return store.dispatch(Sendlogin(post))
//         .then(()=>{
            
//             const secreateword=store.getState().Signin
//             expect(Object.values(secreateword)[1].data.data.status).toBe(true)
            
//         })
//     })

// })



// jest.mock('../redux/actions');

// const setup=((initialState={})=>{
//     const store=storefactory(initialState)
// const wrapper=mount(<Provider store={store}><App/></Provider>)
// const inputBox=findTestAttr(wrapper,"username")
// inputBox.simulate("change",{target:{value:5252}})
// const PassBox=findTestAttr(wrapper,"password")
// PassBox.simulate("change",{target:{value:"admin"}})

// const submitButton=findTestAttr(wrapper,"LoginButton")
// submitButton.simulate("click",{preventDefault(){}})

// return wrapper

//   // render(<App />);
//   // const linkElement = screen.getByText(/learn react/i);
//   // expect(linkElement).toBeInTheDocument();
// });

// const server= setupServer(rest.post("https://d.jeweltrace.in/login",(req,res,ctx)=>{
//      return res(ctx.json({data:{status:true}}))
// })) 

// describe("render without crashing",()=>{
//     it
// })












// import React from "react";
// import { configure, shallow } from "enzyme";
// import Login from "../pages/Login/Login";
// import Adapter from "enzyme-adapter-react-16";
// configure({adapter:new Adapter()});
// // describe("Grid should be",()=>{
// //     it("it should run without throwing error",()=>{

// //     const component = shallow(<Login/>);
// //     // console.log(component.debug());
// //     const wrapper=component.find("Grid");
// //     expect(wrapper.length).toBe(13);

// //     })
// // })

// // const render





































// // import React from "react";
// // // import ReactDOM, { render } from "react-dom";
// // import { render, screen } from "@testing-library/react";
// // import Login from "../pages/Login/Login";
// // import {useSelector} from "react-redux"
// // import user from "@testing-library/user-event"
// // import CustomButton from "../component/button/Button";
// // import { Provider } from "react-redux";
// // import Store from "../store";

// // // jest.mock("react-redux");
// // // describe("Login",()=>{
// // //     it("renders without crashing",()=>{
// // //    useSelector.mockReturnValuse({
    
// // //    })
// // //     })
    
    
// // // })



// // test("debug all element",()=>{
// //     const onSubmit=jest.fn();
// //     render(<Provider store={Store}><Login onSubmit={onSubmit} /></Provider>);
    // const input =screen.getAllByPlaceholderText("username");
    // user.type(input,"username")
// //     const button=screen.getAllByRole("button")
// //     user.click(button);
// //     expect(onSubmit).toBeCalledTimes(1)


// // })



// describe("Login",()=>{
//     Sendlogin.getData()
    // beforeAll(()=>{
    //     server.listen();
    // })
    // beforeEach(()=>{
    //     server.resetHandlers();
    // })

    // afterAll(()=>{
    //     server.close()
    // })

    // const history=createMemoryHistory(["/login","dashboard"])
    // const {debug}=render(
    // <Router history={history}> <Switch>
    //     <Provider store={Store}>
    //     <Public exact path="/login" component={Login}/>
    //     <Private exact path="/dashboard" component={Navbar}/>
    //     </Provider>
    //     </Switch>
    
    // </Router>


    




// //  // const div=document.createElement("div");
// //     // render(<Login/>,div)
 




















// describe("Login",()=>{
//     it("when value stored in store then it should true",async()=>{
//         const history=createMemoryHistory(["/","/dashboard"])
//      render(
//         <Router history={history}><Switch><Provider store={Store}> <Route exact path="/" component={Login}/>
//         <Route exact path="/dashboard" component={Navbar}/>
//         </Provider>
//         </Switch></Router>
    
//         )
//         const username =screen.getAllByTestId(/Username/i)
//         const password =screen.getAllByTestId(/Password/i)
//         // console.log(input);
//         userEvent.type(username,5252)
//         userEvent.type(password,"admin")
//         const button=screen.getAllByTestId(/LoginButton/i)
//         userEvent.click(button);
    
//         // user.type(input,"username")
//     })
//     })
    
// const setup=()=>{
//     const store=storefactory()
//     return mount(<Provider store={store}><Login/></Provider>)
//   }
  

//   describe("render with true",()=>{
//     let wrapper;
//     beforeEach(() => {
//       wrapper = setup({ success:true });
//     });
//     test('should not throw error', () => {
// const componentInput=findTestAttr(wrapper,'component-input')
// expect(componentInput.length).toBe(1)
//     })
//     test('should run if true inputbox will hide', () => {
//       const inputbox=findTestAttr(wrapper,"input-box") 
//       expect(inputbox.exists()).toBe(false) 
//     })
//     test('should run if true submitbutton will hide', () => {
//         const submitbutton=findTestAttr(wrapper,"submit-button") 
//         expect(submitbutton.exists()).toBe(false) 
//       })
    
    
// })









const setup=()=>{
return render(<BrowserRouter>
    <Switch>
    <Provider store={Store}>
        <Route path="/" component={Login}/>
        <Route path="/home" component={Home}/>
    </Provider>
    </Switch>
    </BrowserRouter>
    
    )   

}







describe.skip("when value stored expect(username.length).toBe(2)in store then it should true", ()=>{
    const screen=setup()
    // jest.spyOn(mockAxios.post,"default").mockResolvedValue({
    //     status:200,
    //     response:{ data:{status:true}}
    // })
    test('should', async() => {
    
    // debug()
   
        
    
    
    const username =screen.getAllByTestId(/username/i)
    expect(username.length).toBe(2)
    
    const password =screen.getAllByTestId(/Password/i)
    // console.log(input);
    expect(password.length).toBe(1)
    userEvent.type(username,5252);
    // expect(username.props.value).toBe(5252)
    userEvent.type(password,"admin")
    // const button=screen.getAllByTestId(/LoginButton/i)
    // expect(button.length).toBe(1)
    // fireEvent.click(screen.getByTestId(/LoginButton/i))



    // await screen.getByTestId(/List/i) dashboard
    // user.type(input,"username")
// })
})
})