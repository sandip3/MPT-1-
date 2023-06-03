import { Component } from "@angular/core";

@Component({
    selector: "app-form",
    templateUrl: "./form.component.html",
    styleUrls: ["./form.component.css"],
})
export class FormComponent {
    products = [
        {
            name: "iPhone 14 Pro Max",
            description:
                "iPhone 14 Pro Max. Capture incredible detail with a 48MP Main camera. Experience iPhone in a whole new way with Dynamic Island and Always-On display. And get peace of mind with groundbreaking safety features.",
            price: "$990",
            image: "https://t-mobile.scene7.com/is/image/Tmusprod/Apple-iPhone-14-Pro-Max-Deep-Purple-frontimage",
            review: "4 star",
        },
        {
            name: "Galaxy S23 Ultra",
            description:
                "The Samsung Galaxy S23 Ultra is more than the next big step in mobile tech. With it's amazing 200MP camera, the highest camera resolution on a phone, and stunning Night Mode, you can share those big moments no matter the lighting. Record incredibly smooth video during life’s most exciting moments with 8K video capture @ 30 fps. Plus, with the fastest Snapdragon processor yet, juggle high-intensity games, multiple apps, or video calls with ease. Write, sketch, edit, create, and share from anywhere with a built-in S Pen. And do it all on an incredibly large 6.8'' display built for gaming, streaming, creating while on the nation’s largest and fastest nationwide 5G network*",
            price: "$2000",
            image: "https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/samsung/Samsung-Galaxy-S23-Ultra/Green/Samsung-Galaxy-S23-Ultra-Green-frontimage.png",
            review: "4.8 star",
        },
    ];

    newProduct = {
        name: "",
        description: "",
        price: "",
        image: "",
        review: "",
    };
    addProduct() {
        this.products.push(this.newProduct);
        this.newProduct = {
            name: "",
            description: "",
            price: "",
            image: "",
            review: "",
        };
    }
}
