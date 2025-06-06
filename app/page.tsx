'use client';
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function FitBoxGymManager() {
  const [members, setMembers] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [revenues, setRevenues] = useState([]);

  const [newMember, setNewMember] = useState({ name: '', plan: '', fee: '' });
  const [newEmployee, setNewEmployee] = useState({ name: '', role: '' });
  const [newExpense, setNewExpense] = useState({ description: '', amount: '' });
  const [newRevenue, setNewRevenue] = useState({ description: '', amount: '' });

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">FitBox Addis Gym Management</h1>
      <Tabs defaultValue="members" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="members">Members</TabsTrigger>
          <TabsTrigger value="employees">Employees</TabsTrigger>
          <TabsTrigger value="finance">Finance</TabsTrigger>
          <TabsTrigger value="classes">Classes</TabsTrigger>
          <TabsTrigger value="schedule">Schedule</TabsTrigger>
        </TabsList>
        <TabsContent value="members">
          <Card>
            <CardContent className="space-y-4 p-4">
              <h2 className="text-xl font-semibold">Add New Member</h2>
              <Input placeholder="Member Name" value={newMember.name} onChange={(e) => setNewMember({ ...newMember, name: e.target.value })} />
              <Input placeholder="Plan (Basic / Warrior / Elite)" value={newMember.plan} onChange={(e) => setNewMember({ ...newMember, plan: e.target.value })} />
              <Input placeholder="Monthly Fee" value={newMember.fee} onChange={(e) => setNewMember({ ...newMember, fee: e.target.value })} />
              <Button onClick={() => { if (newMember.name && newMember.plan && newMember.fee) { setMembers([...members, newMember]); setNewMember({ name: '', plan: '', fee: '' }); }}}>Add Member</Button>
              <h3 className="text-lg font-medium pt-4">Current Members</h3>
              <ul className="list-disc list-inside">
                {members.map((m, idx) => (
                  <li key={idx}>{m.name} – {m.plan} – ${m.fee}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}