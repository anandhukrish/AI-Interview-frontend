import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Field, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import Link from "next/link";

const Register = () => {
  return (
    <Card className="w-125 mt-8">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          Create Your Account
        </CardTitle>
        <div className="mb-4 mt-1">
          <p className="text-sm text-black">
            Start your journey toward your dream career with AI powered
            preparation precision.
          </p>
        </div>
      </CardHeader>
      <CardContent>
        <div>
          <Button variant={"outline"} className="w-full text-center py-5">
            Continue with Google
          </Button>
          <div className="flex gap-4 mt-4">
            <Button variant={"outline"} className="flex-1 py-5">
              GitHub
            </Button>
            <Button variant={"outline"} className="flex-1 py-5">
              LinkedIn
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-4">
          <div className="flex-1 border-t border-gray-300" />
          <p className="text-sm text-muted-foreground text-center my-4 uppercase">
            Or Sign up with email
          </p>
          <div className="flex-1 border-t border-gray-300" />
        </div>
        <form className="flex flex-col gap-4">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="fieldgroup-name">Full Name</FieldLabel>
              <Input
                id="fieldgroup-name"
                placeholder="Jordan Lee"
                className="h-10"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="fieldgroup-email">Email Address</FieldLabel>
              <Input
                id="fieldgroup-email"
                placeholder="alice@example.com"
                className="h-10"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="fieldgroup-password">Password</FieldLabel>
              <div className="flex items-center gap-2">
                <Input
                  id="fieldgroup-password"
                  type="password"
                  placeholder="••••••••"
                  className="h-10"
                />
                <Button>eye</Button>
              </div>
            </Field>
            <Field orientation="horizontal">
              <Button
                type="submit"
                className="w-full py-5 bg-blue-600 text-white hover:bg-blue-700"
              >
                Create Account
              </Button>
            </Field>
          </FieldGroup>
        </form>
        <div className="mt-8">
          <p className="text-sm text-muted-foreground text-center my-4">
            {`By signing up, you agree to our `}
            <a href="#" className="text-blue-500">
              Terms
            </a>
            {` and `}
            <a href="#" className="text-blue-500">
              Privacy.
            </a>
          </p>
        </div>
        <Separator />
        <div className="mt-4">
          <p className="text-sm text-muted-foreground text-center my-4">
            {`Already have an account? `}
            <Link href={"/login"} className="text-blue-500">
              Log In
            </Link>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Register;
