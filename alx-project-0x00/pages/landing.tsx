import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC = () => {
    return (
        <div>
            <h1 className="text-xl font-extralight">
                Landing page
            </h1>
            <Card />
            <Card />
            <div className=" items-center gap-4">
        {/* Small Buttons */}
        <Button title="Small Button - Rounded-sm" styles="rounded-sm text-sm bg-blue-500 hover:bg-blue-600" />
        <Button title="Small Button - Rounded-md" styles="rounded-md text-sm bg-green-500 hover:bg-green-600" />
        <Button title="Small Button - Rounded-full" styles="rounded-full text-sm bg-red-500 hover:bg-red-600" />

        {/* Medium Buttons */}
        <Button title="Medium Button - Rounded-sm" styles="rounded-sm text-base bg-blue-500 hover:bg-blue-600" />
        <Button title="Medium Button - Rounded-md" styles="rounded-md text-base bg-green-500 hover:bg-green-600" />
        <Button title="Medium Button - Rounded-full" styles="rounded-full text-base bg-red-500 hover:bg-red-600" />

        {/* Large Buttons */}
        <Button title="Large Button - Rounded-sm" styles="rounded-sm text-lg bg-blue-500 hover:bg-blue-600" />
        <Button title="Large Button - Rounded-md" styles="rounded-md text-lg bg-green-500 hover:bg-green-600" />
        <Button title="Large Button - Rounded-full" styles="rounded-full text-lg bg-red-500 hover:bg-red-600" />
      </div>
        </div>
    )
}

export default Landing