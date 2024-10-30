import Icon from "@/components/Icon"
import { Button } from "@/components/ui/button"

const Signin = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full min-h-svh">
      <Button>
        <Icon name="Mail" /> Google Signin
      </Button>
    </section>
  )
}

export default Signin
