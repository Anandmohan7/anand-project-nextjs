import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function Member() {
  return (
    <div className="flex flex-col items-center justify-center bg-foreground">
      <div className="mb-4 mt-8 text-primary-heading flex flex-wrap">
        <h1 className="text-4xl font-bold text-center">
          Manage your entire community in a single system
        </h1>
      </div>
      <div className="text-center text-muted">
        <p>Who is Nexcent suitable for</p>
      </div>
      <div className="mt-20 mb-17 flex flex-wrap w-full justify-evenly">
        <Card className="w-[350px] flex flex-col items-center">
          <CardHeader className="flex flex-col items-center">
            <img className="w-20 mb-4" src="/MemIcon1.png" />
            <CardTitle className="text-center">
              Membership Organisations
            </CardTitle>
            <CardDescription className="text-center">
              Our membership management software provides full automation of
              membership renewals and payments.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="w-[350px] flex flex-col items-center">
          <CardHeader className="flex flex-col items-center">
            <img className="w-20 mb-4" src="/MemIcon2.png" />
            <CardTitle className="text-center">National Associations</CardTitle>
            <CardDescription className="text-center">
              Our membership management software provides full automation of
              membership renewals and payments.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="w-[350px] flex flex-col items-center">
          <CardHeader className="flex flex-col items-center">
            <img className="w-20 mb-4" src="/MemIcon3.png" />
            <CardTitle className="text-center">Clubs and Groups</CardTitle>
            <CardDescription className="text-center">
              Our membership management software provides full automation of
              membership renewals and payments.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}

export default Member;
