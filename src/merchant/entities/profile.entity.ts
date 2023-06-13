import { Column } from "typeorm";
import { Preferences } from "./preferences.entity";
import { Summary } from "./summary.entity";

export class Profile {
    @Column(() => Preferences)
    preferences: Preferences

    @Column(() => Summary)
    summary: Summary
}