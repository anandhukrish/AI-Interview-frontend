import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Field, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import Link from "next/link";

const Login = () => {
  return (
    <Card className="w-125 mt-8">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
        <div className="mb-8 mt-1">
          <p className="text-sm text-black">
            Precision preparation starts here. Login to access your dashboard
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
            Or continue with email
          </p>
          <div className="flex-1 border-t border-gray-300" />
        </div>
        <form className="flex flex-col gap-4">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="fieldgroup-name">Email Address</FieldLabel>
              <Input
                id="fieldgroup-name"
                placeholder="alice@example.com"
                className="h-10"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="fieldgroup-email">Password</FieldLabel>
              <Input
                id="fieldgroup-email"
                type="password"
                placeholder="••••••••"
                className="h-10"
              />
            </Field>
            <Field orientation="horizontal">
              <Button type="submit" className="w-full py-5">
                Sign In
              </Button>
            </Field>
          </FieldGroup>
        </form>

        <div className="mt-12">
          <p className="text-sm text-muted-foreground text-center my-4">
            {`Don't have an account? `}
            <Link href="/register" className="text-blue-500">
              Sign Up
            </Link>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Login;
