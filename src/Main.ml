module R = Reaml

module Hello = struct
  type props = { name : string }

  external make : props R.component = "Hello"
    [@@reaml.component] [@@bs.val] [@@bs.module "./Main.js"]
end

module Button = struct
  type props = { text : string }

  let make =
   fun [@reaml.component "Button"] { text } ->
    let[@reaml] count, setCount = R.useState 0 in
    R.button
      [
        R.class_
          "px-6 sm:px-10 py-5 bg-white font-semibold text-purple-600 sm:text-lg \
           rounded-full shadow-lg focus:outline-none transition duration-150 transform \
           hover:-translate-y-1 hover:bg-gray-300 hover:scale-105";
        R.onClick (fun _ -> setCount (count + 1));
      ]
      [ text |> Js.String.replace "{}" (string_of_int count) |> R.string ]
end

let main =
  R.div
    [ R.class_ "pt-8 mx-8 flex flex-col items-center" ]
    [
      Hello.make { name = "Reaml" };
      Button.make { text = "You've clicked this button {} times!" };
    ]

let () = main |> R.renderTo "main"
