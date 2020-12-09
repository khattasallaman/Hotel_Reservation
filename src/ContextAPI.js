import React, { Component } from 'react'
import Client from './Contentful'
import config from './config'
// console.log("we are herereeereerer")
// Client.getEntries({
//     content_type:"beatchResortRoom"
// })
// .then((response) => console.log("this is the response    ",response.items))
// .catch(console.error)

export const RoomContext = React.createContext()


export default class ContextAPI extends Component {
    state =  {
        rooms : [],
        sortedRooms: [],
        featuredRooms:[],
        isLoading:true,
        type:'all',
        capacity:1,
        price:0,
        minPrice:0,
        maxPrice:0,
        minSize:0,
        maxSize:0,
        breakfast:false,
        pets:false
    }

    getData = async ()=> {
        try {
            const response = await Client.getEntries({
                content_type: config.SPACE,
                order: config.ACCESS_TOKEN
            })
            console.log("this is the response     ",response.items)
            // let imm = response.item.fields.images.map((img)=> (img))
            // console.log("this is the imagesss   ", imm)
            const rooms = this.formateItems(response.items)
            // console.log(rooms)
            const featuredRooms = rooms.filter((room)=> room.featured === true);
            // console.log(featuredRooms)
            let maxPrice = Math.max(...rooms.map((room)=> room.price));

            // let minPrice = Math.min(...rooms.map((room)=> room.price))
            let maxSize = Math.max(...rooms.map((room) => room.size));
            // console.log("this is the max priiiiice, "+ maxPrice)
            console.log("this is the max siiiiiize, "+ maxSize)
            this.setState({
                rooms, featuredRooms, sortedRooms: rooms, isLoading:false, maxPrice, maxSize, price:maxPrice
            })
            
        } catch (error) {
            console.log(error)
        }

    }
    componentDidMount() {

        this.getData()
        
        // console.log(this.state.isLoading)
        // console.log(this.state.featuredRooms)
        // console.log(this.state.rooms)
    }
    handleChange = (event) => {
        const { target} = event;
        const {name, type} = target;
        const value = type === "checkbox" ? target.checked : target.value;
        console.log(`this is the name : ${name} , this is the type : ${type} , this is the value : ${value}`)
        this.setState({
            [name]:value
        }, this.filterRooms)
    }
    
    filterRooms = () => {
        let {type, rooms, capacity, price, minSize, maxSize, breakfast, pets} = this.state;
        let tempRooms = [...rooms];
        if(type !== 'all'){
            // filter by type
            console.log('hello from filterRooms')
         tempRooms = tempRooms.filter((room)=> room.type === type);
        }
        // filter by capacity
        capacity = parseInt(capacity);
        console.log("this is the type of capacity: "+typeof(capacity))
        if(capacity !== 1){
            tempRooms = tempRooms.filter((room) => room.capacity <= capacity)
        }
        // filter by price
        price = parseInt(price);
        console.log("this is the type of price: "+typeof(price))
        // console.log("this is room price: "+ price)
        // console.log("this is temproms beffffore : ", tempRooms)
        tempRooms = tempRooms.filter((room) => room.price <= price)
        // console.log("this is room minSize: "+ minSize)
        // console.log("this is room maxSize: "+ maxSize)
        // filter by size
        // console.log("this is temproms beffffore : ", tempRooms)
        tempRooms = tempRooms.filter((room) => room.size >= minSize && room.size <= maxSize)
        // console.log("this is temproms afffffffteeeerrrr : ", tempRooms)
        // filter by breakfast
        if(breakfast){
            tempRooms = tempRooms.filter((room) => room.breakfast);
        }
        if(pets){
            tempRooms = tempRooms.filter((room) => room.pets);
        }
        this.setState({
            sortedRooms:tempRooms
        })
    

    }
    formateItems(items){
       let newRooms = items.map((item)=> {
            let id = item.sys.id;
           console.log("this is the itemmm   ", item)
            let images = item.fields.images.map((image) => (image.fields.file.url));
            console.log("and this is the images of the item     ", images)
            let  newRoom = {...item.fields, id, images};
            return newRoom;
        })
        return newRooms
    }
    getRoom =  (slug)=>{
        const allRooms = [...this.state.rooms];
      const room =  allRooms.find((room)=> (room.slug === slug)
        )
        return room
    }
    render() {
        return (
            <RoomContext.Provider value={{...this.state, getRoom: this.getRoom, handleChange:this.handleChange}}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

export const RoomConsumer = RoomContext.Consumer;
